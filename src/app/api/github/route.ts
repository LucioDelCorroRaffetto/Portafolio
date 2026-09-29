import { NextResponse } from "next/server";

const GITHUB_USER = "LucioDelCorroRaffetto";

export interface GitHubActivityItem {
  repoName: string;
  message: string;
  /** ISO timestamp of the push event. */
  date: string;
  url: string;
}

interface GitHubPushEvent {
  type: string;
  repo: { name: string };
  created_at: string;
  payload?: { head?: string };
}

const GH_HEADERS = {
  "User-Agent": "lucio-portfolio",
  Accept: "application/vnd.github+json",
};

interface GitHubRepo {
  name: string;
  full_name: string;
  fork: boolean;
  pushed_at: string;
  html_url: string;
}

async function recentRepoActivity(): Promise<GitHubActivityItem[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=10`,
    { headers: GH_HEADERS, next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];

  const repos = ((await res.json()) as GitHubRepo[])
    // Skip forks and the profile README repo (auto-updated, not real work).
    .filter((r) => !r.fork && r.name !== GITHUB_USER)
    .slice(0, 5);

  const items = await Promise.all(
    repos.map(async (r): Promise<GitHubActivityItem | null> => {
      try {
        const cRes = await fetch(
          `https://api.github.com/repos/${r.full_name}/commits?per_page=1`,
          { headers: GH_HEADERS, next: { revalidate: 3600 } }
        );
        if (!cRes.ok) return null;
        const [latest] = (await cRes.json()) as {
          commit?: { message?: string };
        }[];
        const message = (latest?.commit?.message ?? "").split("\n")[0].trim();
        if (!message) return null;
        return {
          repoName: r.full_name,
          message,
          date: r.pushed_at,
          url: r.html_url,
        };
      } catch {
        return null;
      }
    })
  );

  return items.filter((x): x is GitHubActivityItem => x !== null);
}

export async function GET() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/events/public?per_page=50`,
      { headers: GH_HEADERS, next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return NextResponse.json({ items: [] }, { status: 200 });
    }

    const events = (await res.json()) as GitHubPushEvent[];

    // The events feed no longer includes commit objects, only the head SHA.
    // Take the 5 most recent pushes and resolve each head commit message.
    const targets: { repoName: string; head: string; date: string }[] = [];
    const seenHeads = new Set<string>();
    for (const ev of events) {
      if (ev.type !== "PushEvent" || !ev.payload?.head) continue;
      if (seenHeads.has(ev.payload.head)) continue; // skip duplicate push entries
      seenHeads.add(ev.payload.head);
      targets.push({
        repoName: ev.repo.name,
        head: ev.payload.head,
        date: ev.created_at,
      });
      if (targets.length >= 5) break;
    }

    const items = (
      await Promise.all(
        targets.map(async (t): Promise<GitHubActivityItem | null> => {
          try {
            const cRes = await fetch(
              `https://api.github.com/repos/${t.repoName}/commits/${t.head}`,
              { headers: GH_HEADERS, next: { revalidate: 3600 } }
            );
            if (!cRes.ok) return null;
            const commit = (await cRes.json()) as {
              commit?: { message?: string };
            };
            const message = (commit.commit?.message ?? "")
              .split("\n")[0]
              .trim();
            if (!message) return null;
            return {
              repoName: t.repoName,
              message,
              date: t.date,
              url: `https://github.com/${t.repoName}`,
            };
          } catch {
            return null;
          }
        })
      )
    ).filter((x): x is GitHubActivityItem => x !== null);

    if (items.length > 0) return NextResponse.json({ items });

    // The events feed only covers the last 90 days of *public* activity, and
    // most day-to-day work lands in private org repos. Fall back to the most
    // recently pushed public repos and their latest commit.
    return NextResponse.json({ items: await recentRepoActivity() });
  } catch {
    return NextResponse.json({ items: [] }, { status: 200 });
  }
}
