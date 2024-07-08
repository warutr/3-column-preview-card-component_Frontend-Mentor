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
          className={`${bigShoulder.className} pt-8 text-[38px] uppercase text-white`}
        >
          {title}
        </h1>
        <p className="text-[14.5px] pt-[21px] leading-[25px] tracking-wide text-white">
          {description}
        </p>
      </div>
      <div className="pt-6">
        <button
          className={`bg-white rounded-3xl text-base border-2 mt-8 p-[11px] px-7 text-center hover:text-white hover:text-${colors} hover:bg-white hover:bg-opacity-10 `}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CardSection;
