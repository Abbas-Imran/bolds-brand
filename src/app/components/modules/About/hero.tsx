import Image from "next/image";
import { oswald } from "@/app/styles/font";

export default function Hero() {
  return (
    <div className="w-full h-[700px] sm:h-[831px] bg-gradient-to-b from-[#2d313d] via-[#2d313d] to-black flex flex-col items-center justify-center text-center px-4 sm:px-6 rounded-b-[60px] sm:rounded-b-[80px] relative -top-5 left-0 z-[-1]">
      <div className="w-52 mt-16 h-48 sm:w-[450px] sm:h-[354px] mb-10 sm:mb-10 sm:mt-10">
        <Image
          alt="logo with text"
          width={450}
          height={354}
          src="/logo_text.jpg"
          className="w-full h-auto"
        />
      </div>
      <div className="mt-6 sm:mt-8 px-4 sm:px-10">
        <p
          className={`${oswald.className} text-[14px] min-w-[270px]:text-10px sm:text-md md:text-2xl text-[#FFFFFF] leading-relaxed sm:leading-normal`}
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
