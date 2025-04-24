import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "バックエンドっぽい処理を書きたくなったらここ実装する",
    timestamp: new Date().toISOString(),
  });
}
