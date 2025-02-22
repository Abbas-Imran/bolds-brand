import Image from "next/image";
import { MdOutlineShare } from "react-icons/md";

export default function WidgetBottom() {
  return (
    <div className="relative px-6 md:px-48 h-auto md:h-[400px] rounded-lg overflow-hidden mt-32">
      <MdOutlineShare className="absolute top-4 right-4 md:right-52 text-[#E0E0E0] text-4xl md:text-5xl p-2 rounded-full cursor-pointer" />
      <Image
        alt="Image in bottom"
        width={450}
        height={400}
        src="/"
        className="w-full h-auto md:h-[400px] object-cover rounded-xl bg-[#B2B2B2]"
      />
    </div>
  );
}
