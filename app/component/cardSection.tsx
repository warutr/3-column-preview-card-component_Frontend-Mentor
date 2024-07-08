import Image, { StaticImageData } from "next/image";
import React from "react";
import { lexenda, bigShoulder } from "./fonts";

type cardSectionProps = {
  description: string;
  title: string;
  colors: string;
  icon: StaticImageData;
  className?: string;
};

const CardSection = ({
  title,
  colors,
  icon,
  description,
}: cardSectionProps) => {
  return (
    <div
      className={`flex flex-col justify-between ${lexenda.className} bg-${colors} h-full w-full p-12`}
    >
      <div>
        <Image src={icon} alt="" />
        <h1
          className={`${bigShoulder.className} pt-[1.9rem] text-[2.4rem] uppercase text-white`}
        >
          {title}
        </h1>
        <p className="ptext-[0.9rem] pt-[1.35rem] leading-[1.55rem] tracking-wide text-white">
          {description}
        </p>
      </div>
      <div className="pt-6">
        <button
          className={`bg-white hover:text-white text-${colors} hover:bg-${colors} rounded-3xl text-base border-2 mt-8 hover:cursor-pointer p-[12px] px-7 text-center duration-100 hover:border-transparent hover:shadow-md`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CardSection;
