import Tab from "@/components/tab";
import React from "react";
import { Boxes, PackageOpen, Eclipse } from "lucide-react";
import AboutTabCard from "./components/AboutTabCard";

const About = () => {
  const topics = [
    {
      label: "Decentralization",
      title: {
        text: "Crypto is the leading platform for",
        highlight: "crowd sales!",
      },
      description:
        "Most cryptocurrencies are not controlled by any central authority such as a government or financial institution.",
      items: [
        {
          icon: <Boxes className="w-9 h-9" />,
          title: "Interactive reports",
          description: "Learn about your users.",
        },
        {
          icon: <Eclipse className="w-9 h-9" />,
          title: "Team dashboard",
          description: "Monitor your metrics.",
        },
        {
          icon: <PackageOpen className="w-9 h-9" />,
          title: "Limitless segmentation",
          description: "Surface hidden trends.",
        },
      ],
      image: "/about1.webp",
    },
    {
      label: "Blockchain",
      title: {
        text: "Blockchain is changing the game for data and",
        highlight: "finance.",
      },
      description:
        "Blockchain technology is revolutionizing the way we think about data security, transparency, and financial transactions.",
      items: [
        {
          icon: <Boxes className="w-9 h-9" />,
          title: "Bold and impactful",
          description: "Learn about your users.",
        },
        {
          icon: <Eclipse className="w-9 h-9" />,
          title: "Tech-savvy and professional",
          description: "Monitor your metrics.",
        },
        {
          icon: <PackageOpen className="w-9 h-9" />,
          title: "Short and punchy",
          description: "Surface hidden trends.",
        },
      ],
      image: "/about2.webp",
    },
    {
      label: "Privacy",
      title: {
        text: "Privacy is key to safe online",
        highlight: "experiences.",
      },
      description:
        "In today's digital age, protecting your privacy isn't just a personal choice—it's a crucial step toward ensuring your safety online.",
      items: [
        {
          icon: <Boxes className="w-9 h-9" />,
          title: "Straightforward & professional",
          description: "Learn about your users.",
        },
        {
          icon: <Eclipse className="w-9 h-9" />,
          title: "Friendly & trust-building",
          description: "Monitor your metrics.",
        },
        {
          icon: <PackageOpen className="w-9 h-9" />,
          title: "Bold & emphatic",
          description: "Surface hidden trends.",
        },
      ],
      image: "/about3.webp",
    },
    {
      label: "Exchanges",
      title: {
        text: "Exchanges drive crypto",
        highlight: "trading!",
      },
      description:
        "Cryptocurrency exchanges are the beating heart of the digital asset market. These platforms enable users to buy, sell, and trade digital currencies efficiently.",
      items: [
        {
          icon: <Boxes className="w-9 h-9" />,
          title: "Bold & direct",
          description: "Learn about your users.",
        },
        {
          icon: <Eclipse className="w-9 h-9" />,
          title: "Conversational & friendly",
          description: "Monitor your metrics.",
        },
        {
          icon: <PackageOpen className="w-9 h-9" />,
          title: "Professional & clear",
          description: "Surface hidden trends.",
        },
      ],
      image: "/about4.webp",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-[100px] pb-44">
      <Tab
        tabList={topics.map((topic, index) => ({
          ...topic,
          component: (
            <AboutTabCard
              key={index}
              title={topic.title}
              description={topic.description}
              image={topic.image}
              items={topic.items}
            />
          ),
        }))}
      />
    </div>
  );
};

export default About;
