import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
const MarqueeList = () => {
  const companyList = [
    "/marquee/logo1.svg",
    "/marquee/logo2.svg",
    "/marquee/logo3.svg",
    "/marquee/logo4.svg",
    "/marquee/logo5.svg",
  ];
  return (
    <Marquee
      gradient={true}
      gradientColor="#f4f5f8"
      direction="right"
      speed={60}
      pauseOnHover={true}
      loop={0}
    >
      {companyList.map((item, index) => (
        <div className="mx-9" key={index}>
          <Image width={132} height={40} src={item} alt="company logo" />
        </div>
      ))}
    </Marquee>
  );
};

export default MarqueeList;
