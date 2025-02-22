import { oswald } from "@/app/styles/font";

export default function Breadcrumbs() {
  return (
    <nav
      className={`${oswald.className} text-lg font-bold text-[#262626] mt-16 mb-8 px-10`}
    >
      Home &gt; <span>Product</span> &gt;
      <span className="text-blue-500"> Page 1 of 1</span>
    </nav>
  );
}
