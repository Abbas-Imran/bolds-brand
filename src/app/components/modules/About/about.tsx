import { monsterrat } from "@/app/styles/font";
export default function AboutCEO() {
  return (
    <div className="container mx-auto px-20 py-0 min-h-[600px] flex relative ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full min-h-[600px] items-stretch">
        {/* Left Side - Text Section */}
        <div className="flex flex-col  h-full min-h-80">
          <p
            className={`${monsterrat.className} text-sm uppercase text-[#545454]`}
          >
            Lorem Ipsum
          </p>
          <h1
            className={`${monsterrat.className} text-4xl font-bold text-[#707070] mt-4`}
          >
            About the CEO
            <br />
            Ayaz Waheed
          </h1>
          <p
            className={`${monsterrat.className} text-[#707070] mt-6 text-lg leading-relaxed`}
          >
            We are always aiming to exceed customer expectations and provide
            creative solutions to meet any kind of demand. Keeping up with the
            emerging trends, market needs, and combining them with..
          </p>
          <a
            href="#"
            className={`${monsterrat.className} text-[#148AE5] font-semibold mt-[350px] inline-block text-lg underline    `}
          >
            LEARN MORE
          </a>
        </div>

        {/* Right Side - Image Placeholder */}
        <div className="w-full  h-full bg-gray-300"></div>
      </div>
    </div>
  );
}
