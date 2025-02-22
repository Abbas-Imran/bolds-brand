import { monsterrat } from "@/app/styles/font";

export default function ContactForm() {
  return (
    <div className="flex-col items-start mt-14 px-6 md:px-48 md:mr-20">
      <div>
        <h3 className={`${monsterrat.className} text-gray-500 text-lg mb-1`}>
          CONTACT US
        </h3>
        <h2
          className={`${monsterrat.className} text-2xl md:text-3xl font-bold text-gray-800 mb-6`}
        >
          How can we help
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className={`${monsterrat.className} w-full p-2 border border-[#CCCCCC] text-[#3C3C3C] placeholder-[#3C3C3C] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="password"
              placeholder="Password"
              className={`${monsterrat.className} p-2 border border-[#CCCCCC] text-[#3C3C3C] placeholder-[#3C3C3C] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className={`${monsterrat.className} p-2 border border-[#CCCCCC] text-[#3C3C3C] placeholder-[#3C3C3C] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Company"
              className={`${monsterrat.className} p-2 border border-[#CCCCCC] text-[#3C3C3C] placeholder-[#3C3C3C] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <input
              type="text"
              placeholder="Address"
              className={`${monsterrat.className} p-2 border border-[#CCCCCC] text-[#3C3C3C] placeholder-[#3C3C3C] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <textarea
            placeholder="Messenger"
            rows={4}
            className={`${monsterrat.className} w-full p-2 border border-[#CCCCCC] text-[#3C3C3C] placeholder-[#3C3C3C] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          ></textarea>

          <button
            type="submit"
            className="w-full md:w-[200px] bg-[#5573CB] text-white p-2 rounded-xl hover:bg-blue-700 transition"
          >
            CONTACT NOW
          </button>
        </form>
      </div>
    </div>
  );
}
