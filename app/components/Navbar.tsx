import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-pink-600 flex items-center gap-2"
        >
          💗 Mum Helper AI
        </Link>

        {/* Right */}
        <Link
          href="/chat"
          className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full text-sm transition"
        >
          Chat 👶
        </Link>
      </div>
    </header>
  );
}
