"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-4 md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Bringing comfort to your home, one service at a time.
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Discover the excellence of our premium cleaning services, customized
            for you.
          </p>

          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm sm:text-base">
            <li>Regular Cleaning</li>
            <li>Deep Cleaning</li>
            <li>New Home Cleaning</li>
            <li>Recurring Cleaning</li>
          </ul>

          <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Link
              href="/book"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition text-center"
            >
              Book Now
            </Link>
            <Link
              href="/learn-more"
              className="bg-blue-100 text-blue-700 px-6 py-2 rounded-md hover:bg-blue-200 transition text-center"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center w-full">
          <Image
            src="/clean_home.jpg"
            alt="Cleaning service"
            width={500} // original width
            height={400} // original height
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </main>
  );
}