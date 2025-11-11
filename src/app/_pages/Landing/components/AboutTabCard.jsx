import Badge from "@/components/Badge";
import HoverButton from "@/components/HoverButton";
import Image from "next/image";
import React from "react";

const AboutTabCard = ({ title, description, items = [], image }) => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-x-24 gap-y-14">
      <div className="flex flex-col items-stat justify-center w-full">
        <Badge>About</Badge>
        <h3 className="text-5xl  text-gray-800 mb-3">
          {title.text} <span className="text-blue-500">{title.highlight}</span>
        </h3>
        <p className="mb-8 lg:max-w-[478px] text-gray-600">{description}</p>

        <ul className="mb-7 xl:mb-14 space-y-1.5">
          {items.map((item, index) => (
            <li key={index} className="flex list-none items-center gap-4 py-2">
              {item.icon}
              <div>
                <h4 className="text-tagline-1 text-gray-800 dark:text-accent font-medium">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-tagline-2 dark:text-accent/60 font-normal">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <HoverButton
          text={"About"}
          large={true}
          className="w-max"
          variant="outline"
        />
      </div>

      {/*content images */}
      <div className="">
        <Image src={image} width={1253} height={1096} alt="content" />
      </div>
    </div>
  );
};

export default AboutTabCard;
