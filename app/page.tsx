import React from "react";
import sedansIcon from "@/public/images/icon-sedans.svg";
import luxuryIcon from "@/public/images/icon-luxury.svg";
import suvsIcon from "@/public/images/icon-suvs.svg";
import CardSection from "./component/cardSection";

const homePage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center rounded-lg overflow-hidden items-center h-auto lg:w-[57.5rem] max-w-[30rem] mx-3 sm:mx-8 lg:max-w-full lg:h-[31.25rem] my-12 lg:mt-[5.56rem]">
      <CardSection
        colors="brightOrange"
        icon={sedansIcon}
        title="Sedans"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
or on your next road trip."
      />
      <CardSection
        colors="darkCyan"
        icon={suvsIcon}
        title="SUVs"
        description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation"
      />
      <CardSection
        colors="veryDarkCyan"
        icon={luxuryIcon}
        title="Luxury"
        description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury"
        className="bg-veryDarkCyan"
      />
    </div>
  );
};

export default homePage;

/* 

Sedans
Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
or on your next road trip.

SUVs
Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
and off-road adventures.

Luxury
Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
rental and arrive in style.

### Primary

Bright orange: hsl(31, 77%, 52%)
Dark cyan: hsl(184, 100%, 22%)
Very dark cyan: hsl(179, 100%, 13%)

### Neutral

Transparent white (paragraphs): hsla(0, 0%, 100%, 0.75)
Very light gray (background, headings, buttons): hsl(0, 0%, 95%)

## Typography

### Body Copy

- Font size: 15px

### Font

- Family: [Lexend Deca](https://fonts.google.com/specimen/Lexend+Deca)
- Weights: 400

- Family: [Big Shoulders Display](https://fonts.google.com/specimen/Big+Shoulders+Display)
- Weights: 700

import React from "react";
import sedansIcon from "@/public/images/icon-sedans.svg";
import luxuryIcon from "@/public/images/icon-luxury.svg";
import suvsIcon from "@/public/images/icon-suvs.svg";
import CardSection from "./component/cardSection";

const homePage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center rounded-lg  items-center h-auto lg:w-[57.5rem] max-w-[30rem] mx-3 sm:mx-8 lg:max-w-full lg:h-[31.25rem] my-12 lg:mt-[5.56rem]">
      <CardSection
        color="brightOrange"
        icon={sedansIcon}
        title="Sedans"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
or on your next road trip."
        className="bg-brightOrange"
      />
      <CardSection
        color="darkCyan"
        icon={suvsIcon}
        title="SUVs"
        description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation"
        className="bg-darkCyan"
      />
      <CardSection
        color="veryDarkCyan"
        icon={luxuryIcon}
        title="Luxury"
        description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury"
        className="bg-veryDarkCyan"
      />
    </div>
  );
};

export default homePage;

*/
