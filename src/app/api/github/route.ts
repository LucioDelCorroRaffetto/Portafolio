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

    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ items: [] }, { status: 200 });
  }
}
