import { Home, Utensils, Building2, LucideProps } from "lucide-react";
import React from "react";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  variable: "--oswald",
  subsets: ["latin"],
});

export default function Industries() {
  const industries = [
    {
      icon: Home,
      name: "Real Estate",
    },
    {
      icon: Utensils,
      name: "Restaurants",
    },
    {
      icon: Building2,
      name: "Healthcare",
    },
    {
      icon: Home,
      name: "Real Estate",
    },
    {
      icon: Home,
      name: "Real Estate",
    },
    {
      icon: Home,
      name: "Real Estate",
    },
  ];

  return (
    <section className="min-h-screen bg-[#1A1F2E] backdrop-blur-xl py-16 relative overflow-hidden">
      {/* Light effect corners */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-[100px]" />
      <div className="absolute -top-40 right-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-[100px]" />
      <div className="absolute -bottom-20 -left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center mb-12 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <span className={`${oswald.className} text-4xl tracking-tight text-white font-light border border-[#96AFFC]/20 rounded-lg px-14 py-4 inline-block backdrop-blur-sm bg-white/5`}>
            INDUSTRIES WE SERVE
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="aspect-square rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 flex flex-col items-center justify-center gap-4 p-6"
            >
              {React.createElement(
                industry.icon as React.ComponentType<LucideProps>,
                { className: "w-12 h-12 text-white/80", strokeWidth: 1 }
              )}
              <span className={`${oswald.className} text-4xl text-white/80 font-light`}>
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
