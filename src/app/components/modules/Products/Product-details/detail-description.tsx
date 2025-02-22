import { monsterrat } from "@/app/styles/font";

export default function ProductDetailDescription() {
  return (
    <div className="px-4 md:px-0">
      <h1
        className={`${monsterrat.className} text-[#262626] font-bold text-xl md:text-2xl`}
      >
        DETAIL DESCRIPTION
      </h1>
      <p className={`${monsterrat.className} text-[#707070] mt-8 md:mt-16 text-sm md:text-base`}>
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
        impedit quo minus id quod maxime placeat facere possimus, omnis amet
        voluptas assumenda est, omnis dolor repellendus quis nostrum.
        <br />
        <br />
        Temporibus autem quibusdam et aut officiis debitis aut rerum dolorem
        necessitatibus saepe eveniet ut et neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
        numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
        quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, ut aliquid ex ea
        commodi consequatur.
      </p>
    </div>
  );
}
