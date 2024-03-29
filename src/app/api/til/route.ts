import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { title, content } = data;

  const response = await fetch(
    "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til",
    {
      method: "POST",
      body: JSON.stringify({
        id: nanoid(),
        title,
        content,
        author: {
          name: "강준호",
        },
      }),
    }
  );
  const til = await response.json();
  console.log(til);
  return NextResponse.json(til);
}
