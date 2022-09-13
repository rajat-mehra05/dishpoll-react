import React from "react";

const Button = ({ children, isActive, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-amber-600 hover:bg-orange-900  text-white py-2 px-4 rounded-lg`}
    >
      {children}
    </button>
  );
};

export default Button;
