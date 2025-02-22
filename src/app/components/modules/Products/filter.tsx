"use client";
import { useState } from "react";
import { monsterrat, oswald } from "@/app/styles/font";
import { BsArrowRight } from "react-icons/bs";

export default function Filters() {
  const [categories] = useState([
    {
      category: "LED LENS TYPE MODULE",
      items: ["1x Led", "2x Led", "3x Led", "4x Led", "RGB Led"],
    },
    {
      category: "LED DMX MODULE",
      items: ["3x Led", "4x Led"],
    },
  ]);

  const [brands] = useState(["Interone", "Premium Bond"]);

  // Store selected item with category name
  const [selectedItem, setSelectedItem] = useState<{
    category: string;
    item: string;
  } | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  return (
    <aside className="relative w-full md:w-1/4 px-4 border-gray-200">
      <h3
        className={`${oswald.className} relative top-[-30px] text-2xl text-[#262626] font-bold mb-0`}
      >
        FILTERS
      </h3>

      {categories.map((filter, index) => (
        <div key={index}>
          <h4
            className={`${monsterrat.className} text-2xl text-[#262626] mt-5 font-semibold`}
          >
            {filter.category}
          </h4>
          <ul className="space-y-8 pt-8 text-gray-600">
            {filter.items.map((item, idx) => (
              <li
                key={idx}
                className={`${
                  monsterrat.className
                } flex cursor-pointer transition-colors ${
                  selectedItem?.category === filter.category &&
                  selectedItem?.item === item
                    ? "text-[#5573CB]"
                    : ""
                }`}
                onClick={() =>
                  setSelectedItem({ category: filter.category, item })
                }
              >
                <BsArrowRight className="inline mr-3 mt-1" /> {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <hr className="border-t-2 mr-28 mt-6" />

      <div className="mt-4">
        <h3
          className={`${oswald.className} text-2xl text-[#262626] font-bold mb-0`}
        >
          BRAND
        </h3>
        <ul className="space-y-8 pt-8 text-gray-600">
          {brands.map((brand, idx) => (
            <li
              key={idx}
              className={`${
                monsterrat.className
              } flex cursor-pointer transition-colors ${
                selectedBrand === brand ? "text-[#5573CB]" : ""
              }`}
              onClick={() => setSelectedBrand(brand)}
            >
              <BsArrowRight className="inline mr-3 mt-1" /> {brand}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
