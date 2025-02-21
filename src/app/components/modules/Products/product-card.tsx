import Image from "next/image";
import { monsterrat } from "@/app/styles/font";

interface ProductProps {
  image: string;
  title: string;
  subtitle?: string;
  type: string;
}

export default function ProductCard({ image, title, subtitle }: ProductProps) {
  return (
    <div className="bg-white rounded-xl relative pb-14 shadow-md hover:shadow-lg transition">
      {/* Product Image */}
      <div className="aspect-square bg-gradient-to-b rounded-xl from-[#F0EFF5] to-[#E9E9F1] p-4 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={180}
          height={180}
          className="h-auto w-auto object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="absolute bottom-0 w-full">
        {/* Brand Logo */}
        <div className="bg-[#2A2A2A] max-w-36 py-1 rounded-t-xl m-auto">
          <Image
            src="/images/Interon LOGO 3.png"
            alt="Brand Logo"
            width={50}
            height={50}
            className="h-fit m-auto"
          />
        </div>

        {/* Product Title */}
        <div className="bg-[#2A2A2A] p-2 py-4 text-center">
          <h3
            className={`${monsterrat.className} text-xl font-medium text-white`}
          >
            {title}
          </h3>
          {subtitle && <p className="text-sm text-gray-300">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
