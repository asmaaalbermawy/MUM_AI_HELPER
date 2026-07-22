type Props = {
  text: string;
  role: "user" | "ai";
};

export default function MessageBubble({ text, role }: Props) {
  return (
    <div
      className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm shadow-sm ${
        role === "user"
          ? "bg-pink-500 text-white ml-auto rounded-br-md"
          : "bg-white text-gray-700 rounded-bl-md"
      }`}
    >
      {text}
    </div>
  );
}
