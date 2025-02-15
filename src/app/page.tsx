// import Image from "next/image";

import BrandsSection from "./components/modules/Home/brand-section";
import Help from "./components/modules/Home/help";
import Hero from "./components/modules/Home/Hero";
import Industries from "./components/modules/Home/Industries";
import TopProducts from "./components/modules/Home/top-products";

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandsSection />
      <div className="relative z-10 rounded-t-3xl bg-gradient-to-b from-[#FFFFFF] to-[#2D313D]">
        <TopProducts />
        <Industries />
        <Help />
      </div>
    </div>
  );
}
