import React from "react";

const Badge = ({ children }) => {
  return (
    <div className="w-max px-5 py-1.5 bg-[#e8fbc6] rounded-full mb-5">
      {children}
    </div>
  );
};

export default Badge;
