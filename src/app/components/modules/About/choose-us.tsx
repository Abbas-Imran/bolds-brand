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
    <div className="container mx-auto px-10 py-12">
      <h2
        className={`${monsterrat.className} text-5xl font-bold text-center text-[#707070] mb-12`}
      >
        WHY CHOOSE US?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center border-2 border-none h-[500px]"
          >
            <div className="mb-4 w-44 h-44 relative p-5">
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                width={180}
                height={180}
                className="rounded-lg object-contain"
              />
            </div>

            <h1
              className={`${monsterrat.className} text-3xl font-bold text-gray-900 mt-10 h-20 `}
            >
              {feature.title}
            </h1>

            {/* Description */}
            <p className={`${monsterrat.className} text-gray-600 mt-8 px-4 `}>
              {feature.description}
            </p>
            <p
              className={`${monsterrat.className} text-[#B2B2B2] font-semibold underline mt-10`}
            >
              MORE
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
