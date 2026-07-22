import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await fetch(
    "https://api-inference.huggingface.co/models/google/flan-t5-large",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: `You are a kind assistant helping mothers with baby care questions. Answer gently and clearly.\nQuestion: ${message}`,
      }),
    }
  );

  const result = await response.json();

  return NextResponse.json({
    reply: result?.[0]?.generated_text || "Please try again.",
  });
}
