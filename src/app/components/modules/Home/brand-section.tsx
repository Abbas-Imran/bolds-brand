"use client";

import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  variable: "--oswald",
  subsets: ["latin"],
});

export default function BrandsSection() {
  return (
    <div className={`${oswald.className} relative min-h-[600px] w-full`}>
      <div className="absolute -top-10 h-[calc(100%+120px)] w-full bg-[#02040D] -z-10" />
      {/* Floating shapes background */}
      <div className="absolute inset-0 overflow-hidden"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-16 text-center text-5xl max-w-sm m-auto bg-white/5 backdrop-blur-sm shadow-md shadow-white py-4 rounded-xl font-medium text-white">
          BRANDS
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Interline Card */}
          <Link
            href="#"
            style={{ background: "/images/card-bg.png" }}
            className="group relative bg-contain flex flex-col items-center rounded-lg p-6 transition-transform hover:scale-105"
          >
            <div className="mb-4 h-32 w-32">
              <Image
                src="/images/brand1.png"
                alt="Interline Logo"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium text-gray-400 transition-colors group-hover:text-cyan-400">
              EXPLORE
            </span>
          </Link>

          {/* Premium Bond Card */}
          <Link
            href="#"
            className="group relative flex flex-col items-center rounded-lg bg-gradient-to-b from-[#1a1a3a] to-[#0d0d1f] p-6 transition-transform hover:scale-105"
          >
            <div className="mb-4 h-32 w-32">
              <Image
                src="/images/brand1.png"
                alt="Premium Bond Logo"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium text-gray-400 transition-colors group-hover:text-cyan-400">
              EXPLORE
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
