import { NextResponse } from "next/server";
import { getLinkedInPosts } from "@/lib/linkedin";

export async function GET() {
  const posts = await getLinkedInPosts();
  return NextResponse.json({ posts });
}

