import { ImSearch } from "react-icons/im";

export default function SearchBar() {
  return (
    <div className="flex justify-center py-0 px-60">
      <input
        type="text"
        placeholder="Search"
        className="border p-2 rounded-lg placeholder-[#707070] text-[#707070] w-[100] md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ImSearch className=" text-[#787878] text-2xl ml-4 mt-2 " />
    </div>
  );
}
