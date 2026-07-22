import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-pink-50 to-white">

        <div className="bg-white rounded-3xl shadow-lg p-8 max-w-md w-full">

          <div className="text-5xl mb-4">👶💗</div>

          <h1 className="text-3xl font-bold text-pink-600 mb-3">
            Mum Helper AI
          </h1>

          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            A gentle assistant to help you with baby care, sleep routines,
            feeding tips, and skin concerns — anytime you need support.
          </p>

          <Link
            href="/chat"
            className="block bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full font-medium transition"
          >
            Start Chatting
          </Link>

          <p className="mt-4 text-xs text-gray-400">
            ⚠️ This app does not replace medical advice
          </p>
        </div>


        


      </main>

      
    </>
  );
}
