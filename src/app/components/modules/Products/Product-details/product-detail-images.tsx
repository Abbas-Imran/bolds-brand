export default function ProductDetailImages() {
  return (
    <div className="flex flex-col ml-5 md:ml-0 justify-items-stretch">
      <div className="w-[890] h-[200] py-10 bg-[#E9E9F1]">
        <img
          src="/images/3x module 1.png"
          alt="Product Image"
          className="w-full h-[200] object-cover"
        />
      </div>
      <div className="flex flex-row gap-8 mt-6 md:mt-10">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-[#B2B2B2]">
          <img src="" alt="" />
        </div>
        <div className="w-24 h-24 md:w-32 md:h-32 bg-[#B2B2B2]">
          <img src="" alt="" />
        </div>
        <div className="w-24 h-24 md:w-32 md:h-32 bg-[#B2B2B2]">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
