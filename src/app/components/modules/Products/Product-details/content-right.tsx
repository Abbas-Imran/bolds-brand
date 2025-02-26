import { monsterrat, oswald } from "@/app/styles/font";

export default function ContentRight() {
  return (
    <div className="px-4 md:px-0">
      <div>
        <h2
          className={`${monsterrat.className} text-xl md:text-3xl font-semibold text-[#262626] md:mb-16 mb-4`}
        >
          3X LED MODULE
        </h2>
      </div>
      <div className="mb-4">
        <h3
          className={`${monsterrat.className} text-[#B2B2B2] font-medium mb-4 `}
        >
          OVERVIEW
        </h3>
        <p
          className={`${monsterrat.className} text-[#707070] text-sm md:text-base`}
        >
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus.
        </p>
      </div>
      <div>
        <button
          className={`${oswald.className} w-full md:w-72 h-12 font-bold text-center text bg-[#5573CB] rounded-lg`}
        >
          CONTACT US FOR PRICE
        </button>
      </div>
    </div>
  );
}
