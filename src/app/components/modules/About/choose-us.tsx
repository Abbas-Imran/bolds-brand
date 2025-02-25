import { monsterrat } from "@/app/styles/font";
import Image from "next/image";

// Define the type for our card data
type FeatureCard = {
  title: string;
  description: string;
  imageSrc: string;
};

const features: FeatureCard[] = [
  {
    title: "Trusted by top brands",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc: "/images/Mask Group 28.png",
  },
  {
    title: "Reliable logistics and delivery support",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc: "/images/presentation.png",
  },
  {
    title: "Top quality Products",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc: "/images/Mask Group 30.png",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="container mx-auto px-6 sm:px-10 py-12">
      <h2
        className={`${monsterrat.className}  md:text-5xl  font-bold text-center text-[#707070] mb-10  sm:mb-12 xs:text-3xl sm:text-3xl text-[23px]`}
      >
        WHY CHOOSE US?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center border-2 border-none h-[320px] sm:h-[500px]"
          >
            <div className="mb-2 w-32 h-32 sm:w-44 sm:h-44 relative p-4 sm:p-5">
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                width={160}
                height={160}
                className="rounded-lg object-contain"
              />
            </div>

            <h1
              className={`${monsterrat.className} text-[15px] sm:text-sm md:text-2xl min-w-[1300px]:text:2xl font-bold text-gray-900 mt-5 sm:mt-10 h-12 sm:h-20`}
            >
              {feature.title}
            </h1>

            {/* Description */}
            <p
              className={`${monsterrat.className} text-sm sm:text-base text-gray-600 mt-0 sm:mt-8 px-2 sm:px-4`}
            >
              {feature.description}
            </p>
            <p
              className={`${monsterrat.className} text-[#B2B2B2] text-sm sm:text-base font-semibold underline mt-8 sm:mt-10`}
            >
              MORE
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// import { monsterrat } from "@/app/styles/font";
// import Image from "next/image";

// type FeatureCard = {
//   title: string;
//   description: string;
//   imageSrc: string;
// };

// const features: FeatureCard[] = [
//   {
//     title: "Trusted by top brands",
//     description:
//       "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
//     imageSrc: "/images/Mask Group 28.png",
//   },
//   {
//     title: "Reliable logistics and delivery support",
//     description:
//       "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
//     imageSrc: "/images/presentation.png",
//   },
//   {
//     title: "Top quality Products",
//     description:
//       "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
//     imageSrc: "/images/Mask Group 30.png",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <div className="container mx-auto px-10 py-12">
//       <h2
//         className={`${monsterrat.className} text-5xl font-bold text-center text-[#707070] mb-12`}
//       >
//         WHY CHOOSE US?
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="relative flex flex-col items-center text-center border-2 border-none h-[500px]"
//           >
//             <div className="mb-4 w-44 h-44 relative p-5">
//               <Image
//                 src={feature.imageSrc}
//                 alt={feature.title}
//                 width={180}
//                 height={180}
//                 className="rounded-lg object-contain"
//               />
//             </div>

//             <h1
//               className={`${monsterrat.className} text-3xl font-bold text-gray-900 mt-10 h-20 `}
//             >
//               {feature.title}
//             </h1>

//             {/* Description */}
//             <p className={`${monsterrat.className} text-gray-600 mt-8 px-4 `}>
//               {feature.description}
//             </p>
//             <p
//               className={`${monsterrat.className} text-[#B2B2B2] font-semibold underline mt-10`}
//             >
//               MORE
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
