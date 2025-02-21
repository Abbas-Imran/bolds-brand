import { monsterrat } from "@/app/styles/font";

export default function Text() {
  return (
    <div className="flex flex-col  items-center mt-16">
      <h2
        className={`${monsterrat.className} text-5xl font-medium text-center text-[#707070] mb-10`}
      >
        Contact Us
      </h2>
      <p
        className={`${monsterrat.className} text-center w-[604px] text-[#707070]`}
      >
        {" "}
        Mirum est notare quam littera gothica, quam nunc putamus parum claram
        anteposuerit litterarum formas human.
      </p>
    </div>
  );
}
