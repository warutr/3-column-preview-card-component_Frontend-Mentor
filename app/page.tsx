import React from "react";
import { LuxuryIcon, SedansIcon, SuvsIcon } from "./component/svg";

const homePage = () => {
  return (
    <div className="max-w-[440px] md:max-w-[1080px] mx-auto p-5">
      <div className="grid grid-flow-row md:grid-cols-3 text-black">
        <div className="px-5 py-10 bg-primary-Bright_orange text-white md:rounded-l-lg rounded-t-lg">
          <div className="p-4">
            <SedansIcon />
          </div>
          <div className="p-4">Sedans</div>
          <div className="p-4">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </div>
          <div className="p-4">
            <button className="bg-white text-primary-Bright_orange p-2 rounded-md">
              Learn More
            </button>
          </div>
        </div>
        <div className="px-5 py-10 bg-primary-Dark_cyan text-white">
          <div className="p-4">
            <SuvsIcon />
          </div>
          <div className="p-4">SUVs</div>
          <div className="p-4">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </div>
          <div className="p-4">
            <button className="text-primary-Dark_cyan bg-white p-2 rounded-md">
              Learn More
            </button>
          </div>
        </div>
        <div className="px-5 py-10 bg-primary-Very_dark_cyan text-white md:rounded-r-lg rounded-b-lg">
          <div className="p-4">
            <LuxuryIcon />
          </div>
          <div className="p-4">Luxury</div>
          <div className="p-4">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </div>
          <div className="p-4">
            <button className="bg-white text-primary-Very_dark_cyan p-2 rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
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

*/
