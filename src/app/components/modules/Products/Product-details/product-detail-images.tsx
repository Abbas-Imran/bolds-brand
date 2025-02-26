import { Heart } from "lucide-react";

export default function ProductDetailImages() {
  return (
    <div className="flex flex-col ml-5 md:ml-0 md:justify-items-stretch">
      <div className="relative w-[340px] max-[390px]:w-[250px] max-[390px]:rounded-lg max-[390px]:h-[200px] sm:w-[440px] md:w-[890] md:h-[200] py-10 bg-[#E9E9F1]">
        <Heart
          className="relative md:left-[390px] left-[390px] bottom-3 text-[#B2B2B2] sm:block hidden "
          size={28}
        />
        <img
          src="/images/3x module 1.png"
          alt="Product Image"
          className="w-[440px] md:w-full md:h-[200] object-cover"
        />
      </div>
      <div className="flex flex-row gap-8 mt-6 md:mt-10 sm:flex hidden  ">
        <div className="w-32 h-32 md:w-32 md:h-32 bg-[#B2B2B2]">
          <img src="/" alt="" />
        </div>
        <div className="w-32 h-32 md:w-32 md:h-32 bg-[#B2B2B2]">
          <img src="/" alt="" />
        </div>
        <div className="w-32 h-32 md:w-32 md:h-32 bg-[#B2B2B2]">
          <img src="/" alt="" />
        </div>
      </div>
    </div>
  );
}
