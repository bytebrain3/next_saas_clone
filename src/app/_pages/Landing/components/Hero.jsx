"use client";

import Badge from "@/components/Badge";
import HoverButton from "@/components/HoverButton";
import MarqueeList from "@/components/MarqueeList";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const person = ["person1.webp", "person2.webp", "person3.webp"];

  return (
    <div className="bg-[#f4f5f8] h-screen pt-20">
      <div className="relative bg-[#f4f5f8] pt-[200px] pb-16 lg:pb-[100px] 2xl:pt-5 overflow-hidden">
        {/* Hero Dots Background */}
        <div className="absolute inset-0 flex justify-center top-[10%] z-0">
          <Image
            src="/hero-dot-bg.png"
            width={700}
            height={235}
            alt="hero dot"
            className="w-[700px] h-[235px] object-contain"
          />
        </div>

        {/* Main Content */}
        <div className="min-container p-5 relative z-10 flex flex-col items-center justify-center">
          <Badge>Finance</Badge>

          <h2 className="text-[53px] text-black mb-4 max-w-[700px] text-center font-bold">
            Check the latest <span className="text-blue-500">crypto</span> price
            index.
          </h2>

          <p className="mb-7 max-w-[700px] md:mb-10 lg:mb-14 text-center text-gray-600">
            Stay updated with the latest bitcoin price index, offering real-time
            data, historical trends, and market insights to keep you informed
            about the fluctuations in cryptocurrency values.
          </p>

          {/* Buttons */}
          <div className="flex flex-row items-center justify-center mx-auto mb-9 gap-4 z-10">
            <HoverButton text="Get Started" large={true} />
            <HoverButton text="Free Trial" large={true} variant="outline" />
          </div>

          {/* People + Trust Stats */}
          <div className="flex flex-row gap-4 items-center justify-center mb-20">
            <div className="flex -space-x-3.5">
              {person.map((item, index) => (
                <Image
                  src={`/${item}`}
                  key={index}
                  width={48}
                  height={48}
                  alt="person"
                  className="rounded-full ring-2 ring-white bg-[#c6f56f]"
                />
              ))}
              <div className="bg-[#c6f56f] w-12 h-12 rounded-full ring-2 ring-white flex items-center justify-center font-medium text-tagline-2">
                99+
              </div>
            </div>

            <div className="text-left">
              <p className="text-tagline-2 font-medium">Trusted by 20k+</p>
              <p className="text-tagline-3 text-gray-500">
                Customers across the globe
              </p>
            </div>
          </div>

          {/* Marquee List */}
          <div className="max-w-5xl">
            <MarqueeList />
          </div>
          {/* Grid Lines (background) */}
          <div className="absolute inset-0  flex flex-row items-center justify-between h-screen gap-60 z-[-1] ">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-full w-px bg-gray-200 from-stroke-1 to-stroke-1/30"
              ></div>
            ))}
          </div>
        </div>

        {/* Floating Images */}
        <div className="absolute top-[4%] left-[3%] w-[150px] rotate-[-7deg] sm:w-[200px] lg:w-[220px] xl:w-[250px] 2xl:w-fit z-10">
          <Image
            width={392}
            height={387}
            src="/hero1.svg"
            alt="hero dashboard image"
          />
        </div>

        <div className="absolute w-[150px] rotate-11 md:bottom-[67%] md:left-[1%] md:block md:w-[140px] lg:bottom-[52%] lg:left-[2%] lg:w-[180px] xl:bottom-[20%] xl:w-[250px] 2xl:w-[275px] z-10">
          <Image
            width={392}
            height={387}
            src="/hero2.webp"
            alt="hero dashboard image"
          />
        </div>

        <div className="absolute rounded-[14px] -top-[12%] right-[4%] w-[150px] rotate-4 sm:-top-[14%] md:w-[140px] lg:-top-[1.4%] lg:right-[2%] lg:w-[170px] xl:top-[5%] xl:right-[4%] xl:w-[200px] 2xl:top-[6%] 2xl:right-[6%] 2xl:w-[280px] z-10">
          <Image
            width={537}
            height={456}
            src="/hero3.webp"
            alt="hero dashboard image"
            className="rounded-[14px]"
          />
        </div>

        <div className="absolute right-[4%] hidden rotate-[-7deg] md:bottom-[67%] md:block md:w-[140px] lg:right-[1%] lg:bottom-[57%] lg:w-[180px] xl:right-[4%] xl:bottom-[41%] xl:w-[250px] 2xl:bottom-[20%] 2xl:w-fit z-10">
          <Image
            width={406}
            height={261}
            src="/hero4.svg"
            alt="hero dashboard image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
