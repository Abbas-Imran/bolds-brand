import { monsterrat, oswald } from "@/app/styles/font";

export default function Breadcrumbs() {
  return (
    <nav
      className={`${oswald.className} text-sm sm:text-base md:text-lg font-bold text-[#262626] mt-8 sm:mt-12 md:mt-16 mb-16 sm:mb-20 md:mb-8 px-10`}
    >
      Home &gt; <span>Product</span> &gt;
      <span className="text-[#148BE7]"> Page 1 of 1</span>
    </nav>
  );
}

export function BreadcrumbsProductDetails() {
  return (
    <nav
      className={`${monsterrat.className} text-xs md:text-sm font-medium text-[#262626] mt-8 md:mt-16 mb-4 md:mb-8 md:px-0 sm:px-6 px-6 `}
    >
      Home &gt; <span>Product</span> &gt; <span>Page 1 of 1</span> &gt;
      <span className="text-[#148BE7]"> Detail Product</span>
    </nav>
  );
}
