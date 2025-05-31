// components/HeroSection.tsx

import React from "react";
import Button from "./Button";

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Heading: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText = "Get started now",
  onButtonClick,
}) => {
  return (
    <section className="relative mt-56 lg:mt-50">
      <div className="relative flex flex-col gap-6 z-10 justify-center items-center text-center">
        <h1 className="uppercase text-5xl text-center font-bold">{title}</h1>
        <p className="text-gray-400 max-w-[600px] text-md lg:text-lg block font-light">
          {subtitle}
        </p>
        <div className="mt-4">
          <Button title={buttonText} onClick={onButtonClick} />
        </div>
      </div>
    </section>
  );
};

export default Heading;
