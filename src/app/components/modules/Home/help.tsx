import React from "react";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  variable: "--oswald",
  subsets: ["latin"],
});

function Help() {
  return (
    <div className={`${oswald.className} relative pt-20`}>
        <div className="absolute top-2/4 left-0 w-full h-4/5 bg-white rounded-3xl" />
      <div className="">
        <div className="relative mx-auto max-w-5xl px-4">
          <div
            className="relative bg-gradient-to-r from-[#5573CB] to-[#2D313D] rounded-[40px] px-4 py-16"
            style={{
              boxShadow:
                "0 20px 40px rgba(0,0,0,0.15), 0 -5px 20px rgba(255,255,255,0.1) inset",
            }}
          >
            <div className="flex flex-col items-center justify-center gap-6 text-center">
              <h2 className="text-4xl font-light text-white mb-4 max-w-2xl">
                Let Us Help You Find The Perfect Solution For Your Business
                Needs.
              </h2>
              <button className="rounded-full border-2 border-white px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-white hover:text-black">
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
