import Image from "next/image";
import HoverButton from "./HoverButton";

const Header = () => {
  const navItems = [
    {
      name: "Home",
      href: "/",
      subItems: [
        { id: 1, name: "Crypto Marketing" },
        { id: 2, name: "AI Software" },
        { id: 3, name: "AI Chatbot" },
        { id: 4, name: "Web Hosting" },
        { id: 5, name: "Analytics & Reporting" },
        { id: 6, name: "Financial Application" },
        { id: 7, name: "Payment Solutions" },
        { id: 8, name: "Online Banking" },
        { id: 9, name: "Cloud Based Software" },
        { id: 10, name: "Cyber Security" },
        { id: 11, name: "Email Marketing" },
        { id: 12, name: "Lead Capture" },
        { id: 13, name: "Messaging Platform" },
        { id: 14, name: "Mortgage Services" },
        { id: 15, name: "Creative Portfolio" },
        { id: 16, name: "App Builder" },
        { id: 17, name: "App Development" },
        { id: 18, name: "AI Agency" },
        { id: 19, name: "Smart Solutions" },
        { id: 20, name: "Risk Management Software" },
        { id: 21, name: "Personal Finance" },
        { id: 22, name: "Mobile Management Software" },
        { id: 23, name: "Investment Management" },
        { id: 24, name: "Insurance Software" },
        { id: 25, name: "Property Management" },
        { id: 26, name: "POS System" },
        { id: 27, name: "Social Media Management" },
        { id: 28, name: "Nuvexa CRM" },
        { id: 29, name: "Wealth Management" },
        { id: 30, name: "Security Software" },
        { id: 31, name: "Time Tracking" },
        { id: 32, name: "Data Visualization" },
        { id: 33, name: "Digital Marketing Agency" },
        { id: 34, name: "Forex Trading" },
        { id: 35, name: "Decentralized Finance" },
        { id: 36, name: "AI Application" },
        { id: 37, name: "AI Gadgets" },
        { id: 38, name: "AI Resume Builder" },
      ],
    },
    {
      name: "Pages",
      href: "/pages",
      subItems: [
        { id: 1, name: "Tutorial Page" },
        { id: 2, name: "Documentation Page" },
        { id: 3, name: "FAQ Page" },
        { id: 4, name: "Support" },
        { id: 5, name: "Career Page" },
        { id: 6, name: "Career Details" },
        { id: 7, name: "Changelog Page" },
        { id: 8, name: "Terms & Conditions" },
        { id: 9, name: "Privacy Policy" },
        { id: 10, name: "Refund Policy" },
        { id: 11, name: "Features Page 01" },
        { id: 12, name: "Features Page 02" },
        { id: 13, name: "Integration Page 01" },
        { id: 14, name: "Integration Page 02" },
        { id: 15, name: "Integration Page 03" },
        { id: 16, name: "Process Page 01" },
        { id: 17, name: "Process Page 02" },
        { id: 18, name: "Analytics Page" },
        { id: 19, name: "Affiliate Policy" },
        { id: 20, name: "GDPR Page" },
        { id: 21, name: "Testimonials Page 01" },
        { id: 22, name: "Testimonials Page 02" },
        { id: 23, name: "Case Study Page" },
        { id: 24, name: "Case Study Details" },
        { id: 25, name: "Our Team 01" },
        { id: 26, name: "Our Team 02" },
        { id: 27, name: "Team Details" },
        { id: 28, name: "Pricing Page 01" },
        { id: 29, name: "Pricing Page 02" },
        { id: 30, name: "Pricing Page 03" },
        { id: 31, name: "Login Page 01" },
        { id: 32, name: "Login Page 02" },
        { id: 33, name: "Login Page 03" },
        { id: 34, name: "Login Page 04" },
        { id: 35, name: "Signup Page 01" },
        { id: 36, name: "Signup Page 02" },
        { id: 37, name: "Signup Page 03" },
        { id: 38, name: "Signup Page 04" },
        { id: 39, name: "Use Case" },
        { id: 40, name: "Affiliates" },
      ],
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <div className="fixed flex flex-row items-center justify-between mx-auto w-full rounded-full p-2.5 bg-[#fcfcfc] dark:bg-background max-w-7xl border z-50">
      <div>
        <span className="sr-only">Home</span>
        <Image
          src={"/logo.svg"}
          alt="Next Saas"
          width={200}
          height={44}
          className="w-[200px] h-11"
        />
      </div>
      <nav>
        <ul className="flex flex-row items-center justify-between ">
          {navItems.map((item) => (
            <li key={item.name} className="px-4 py-2">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <HoverButton text="Get Started" />
    </div>
  );
};

export default Header;
