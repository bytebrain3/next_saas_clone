"use client";
import React from "react";

const TabContent = ({ children }) => {
  return <div>{children}</div>;
};

const Tab = ({ tabList = [] }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-center border-b border-gray-200 mb-14 lg:mb-[72px]">
        {tabList.map((tab, index) => (
          <div
            className={`py-3 px-10 text-sm font-medium transition-colors duration-200
              ${
                activeTab === index
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            key={index}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div>{tabList[activeTab].component || <></>}</div>
    </div>
  );
};

export default Tab;
