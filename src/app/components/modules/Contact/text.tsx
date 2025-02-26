import { monsterrat } from "@/app/styles/font";

export default function Text() {
  return (
    <div className="flex flex-col items-center mt-16 px-6">
      <h2
        className={`${monsterrat.className} text-4xl sm:text-5xl md:text-6xl  font-medium text-center text-[#707070] mb-10`}
      >
        Contact Us
      </h2>
      <p
        className={`${monsterrat.className} text-center w-full md:w-[604px] px-2 sm:px-10 md:px-28 text-[12px] sm:text-[15px] text-[#707070]`}
      >
        Mirum est notare quam littera gothica, quam nunc putamus parum claram
        anteposuerit litterarum formas human.
      </p>
    </div>
  );
}
