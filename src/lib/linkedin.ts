export interface LinkedInPost {
  id: string;
  title: string;
  text: string;
  url: string;
  createdAt: string;
}

export async function getLinkedInPosts(): Promise<LinkedInPost[]> {
  const token = process.env.LINKEDIN_ACCESS_TOKEN;
  const memberUrn = process.env.LINKEDIN_MEMBER_URN;

  if (!token || !memberUrn) {
    return [];
  }

  try {
    const params = new URLSearchParams({
      q: "authors",
      authors: `List(${memberUrn})`,
      sortBy: "LAST_MODIFIED",
      count: "5",
    });

    const res = await fetch(`https://api.linkedin.com/v2/ugcPosts?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Restli-Protocol-Version": "2.0.0",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("LinkedIn API error:", res.status, await res.text());
      return [];
    }

    const data: any = await res.json();
    const elements: any[] = data.elements ?? [];

    return elements.map((item) => {
      const id: string = item.id ?? item.urn ?? "";
      const createdAt = item["lastModified"]?.time ?? item["created"]?.time;

      const text =
        item.specificContent?.["com.linkedin.ugc.ShareContent"]?.shareCommentary
          ?.text ?? "";

      const url =
        item.content?.contentEntities?.[0]?.entityLocation ??
        "https://www.linkedin.com/in/luciodelcorroraffetto";

      return {
        id: String(id),
        title: text.split("\n")[0]?.slice(0, 80) || "Publicación en LinkedIn",
        text: text.slice(0, 280),
        url,
        createdAt: createdAt ? new Date(createdAt).toISOString() : new Date().toISOString(),
      };
    });
  } catch (error) {
    console.error("Error fetching LinkedIn posts:", error);
    return [];
  }
}

