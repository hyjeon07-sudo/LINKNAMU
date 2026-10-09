import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { getDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

type ClickDoc = { _id: string; count: number };

const validIds = new Set(profile.links.map((link) => link.id));

// 링크별 클릭 수 조회 (지금 목록에 있는 링크만)
export async function GET() {
  const db = await getDb();
  const docs = await db
    .collection<ClickDoc>("clicks")
    .find({ _id: { $in: Array.from(validIds) } })
    .toArray();
  const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
  return NextResponse.json(counts);
}

// 링크 클릭 1회 기록
export async function POST(request: Request) {
  const { id } = await request.json().catch(() => ({ id: undefined }));

  if (typeof id !== "string" || !validIds.has(id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const db = await getDb();
  await db
    .collection<ClickDoc>("clicks")
    .updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });

  return NextResponse.json({ ok: true });
}
