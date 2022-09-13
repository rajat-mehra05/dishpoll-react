import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="text-xl bg-gradient-to-r from-[#a00e0e] to-[#815644] hover:from-[#7e2b08] hover:to-[#960f0f] font-semibold text-white py-2 px-4 rounded"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
