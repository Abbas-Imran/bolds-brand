import Image from "next/image";
import { oswald } from "@/app/styles/font";

export default function Hero() {
  return (
    <div
      className="w-full h-[831px] bg-gradient-to-b from-[#2d313d] via-[#2d313d] to-black flex flex-col items-center justify-center text-center px-4 rounded-b-[80px] relative -top-5
 left-0 z-[-1]"
    >
      <div className="w-450 h-354 mb-20">
        <Image
          alt="logo with text"
          width={450}
          height={354}
          src="/logo_text.jpg"
        />
      </div>
      <div className="mt-8 px-10">
        <p
          className={`${oswald.className} text-2xl px-46 text-[#FFFFFF] leading-relaxed`}
        >
          Welcome to Vision Traders, your trusted partner in delivering
          excellence and innovation. Founded and led by Ayaz Waheed, Vision
          Traders proudly operates from Pakistan as the sole distributor of
          Interone and Premium Bond products. With a commitment to quality and a
          customer-centric approach, we aim to redefine industry standards by
          offering reliable and cutting-edge solutions that cater to diverse
          needs. Our mission is to build enduring relationships with our clients
          through integrity, efficiency, and superior service. At Vision
          Traders, we envision a future where trust and innovation pave the way
          for success, driving us to consistently exceed expectations. Join us
          as we continue to shape a brighter tomorrow for businesses and
          communities alike.
        </p>
      </div>
    </div>
  );
}
