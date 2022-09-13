import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-slate-600 hover:to-green-800 font-semibold text-white py-2 px-4 rounded"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
