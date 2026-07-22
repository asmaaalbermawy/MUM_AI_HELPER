"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import MessageBubble from "@/app/components/MessageBubble";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      role: "ai",
      text: "Hello mama 💗 I'm here to help you with your baby.",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setChat((prev) => [...prev, { role: "user", text: message }]);
    setMessage("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    setChat((prev) => [...prev, { role: "ai", text: data.reply }]);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-80px)] bg-pink-50 flex items-center justify-center px-4">

        {/* CHAT CARD */}
        <div className="bg-white w-full max-w-md h-[550px] rounded-3xl shadow-2xl flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-pink-500 text-white p-4 text-center font-semibold">
            Mum Helper AI 👶
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            {chat.map((msg, i) => (
              <MessageBubble
                key={i}
                text={msg.text}
                role={msg.role as "user" | "ai"}
              />
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about your baby..."
              className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
            />

            <button
              onClick={sendMessage}
              className="bg-pink-500 text-white px-5 rounded-full hover:bg-pink-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
