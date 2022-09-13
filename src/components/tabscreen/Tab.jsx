import React from "react";

const Tab = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="text-3xl
                py-6 px-2
                w-60
               shadow-[10px_10px_rgb(44,39,34)]
               transition-colors ease-out
               duration-300 text-white
               font-semibold
               bg-gradient-to-r
               from-red-400 to-yellow-600
               hover:from-yellow-600 hover:to-red-400 
               hover:text-gray-800
               "
    >
      {children}
    </button>
  );
};

export default Tab;
