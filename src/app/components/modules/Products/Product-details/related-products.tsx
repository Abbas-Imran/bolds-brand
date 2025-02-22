import { monsterrat } from "@/app/styles/font";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../product-card";

export const relatedProducts = [
  {
    id: 1,
    image: "/images/3x module 1.png",
    title: "3x LED Module",
    type: "led",
  },
  {
    id: 2,
    image: "/images/3x module 1.png",
    title: "2x LED Module",
    type: "led",
  },
  {
    id: 3,
    image: "/images/3x module 1.png",
    title: "1x LED Module",
    type: "led",
  },
];

export default function RelatedProducts() {
  return (
    <div className="px-4 md:px-0">
      <div className="flex flex-row justify-between items-center">
        <h1
          className={`${monsterrat.className} text-[#262626] font-bold text-xl md:text-2xl`}
        >
          RELATED PRODUCTS
        </h1>
        <div className="hidden md:flex">
          <ChevronLeft className="mr-2 text-[#B2B2B2]" />
          <ChevronRight className="ml-2 text-[#B2B2B2]" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {relatedProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
