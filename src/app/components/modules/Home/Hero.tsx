import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative rounded-b-3xl z-10 bg-white/30 backdrop-blur-sm ">
      <div className="relative z-20 flex min-h-[500px] items-center justify-center bg-black/5 backdrop-blur-sm px-8 py-16 rounded-b-3xl">
        <div className="flex w-full items-center justify-center gap-10">
          <div className="flex w-fit items-center justify-center gap-10">
            <div className="md:w-28 md:h-28 w-20 h-20 relative">
              <Image alt="Interon Logo" fill src="/interon.png" />
            </div>
            <div className="space-y-8">
              <p className="text-xl text-brand-100">Brands</p>
              <div className="">
                <h1 className="md:text-7xl text-5xl font-bold tracking-tight text-gray-900 mb-16">
                  INTERONE
                  <br />
                  LED's
                </h1>
                <button className="rounded-full border-2 border-gray-900 px-8 py-3 text-lg font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white">
                  DISCOVER NOW
                </button>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="relative flex justify-center w-full max-w-[500px] items-center">
            <Image
              src="/images/Lights.png"
              alt="LED Lights"
              width={400}
              height={300}
              className="h-auto w-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
