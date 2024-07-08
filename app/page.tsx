import React from "react";
import sedansIcon from "@/public/images/icon-sedans.svg";
import luxuryIcon from "@/public/images/icon-luxury.svg";
import suvsIcon from "@/public/images/icon-suvs.svg";
import CardSection from "./component/cardSection";

const homePage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center rounded-lg overflow-hidden items-center h-auto lg:w-[920px] max-w-[480px] mx-3 sm:mx-8 lg:max-w-full lg:h-[500px] my-12 lg:mt-[89px]">
      <CardSection
        colors="brightOrange"
        icon={sedansIcon}
        title="Sedans"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        className="bg-brightOrange"
      />
      <CardSection
        colors="darkCyan"
        icon={suvsIcon}
        title="SUVs"
        description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        className="bg-darkCyan"
      />
      <CardSection
        colors="veryDarkCyan"
        icon={luxuryIcon}
        title="Luxury"
        description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        className="bg-veryDarkCyan"
      />
    </div>
  );
};

export default homePage;
