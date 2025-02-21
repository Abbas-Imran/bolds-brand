import { monsterrat } from "@/app/styles/font";

export default function TextTwo() {
  return (
    <div className="flex flex-col items-start mt-40 px-6 md:px-48">
      <div>
        <h2
          className={`${monsterrat.className} text-2xl md:text-4xl font-medium text-[#404040] mb-8`}
        >
          Plot No. L-10, Sector 11-F, New Karachi, Karachi,
          <br /> Pakistan
        </h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <p className={`${monsterrat.className} w-auto text-[#404040]`}>
          ayazwaheed1984@gmail.com
        </p>
        <p className={`${monsterrat.className} w-auto md:ml-20 text-[#404040]`}>
          +92 321 2140129
        </p>
      </div>
    </div>
  );
}

