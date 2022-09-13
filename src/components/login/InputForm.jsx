import React from "react";

const InputForm = ({ label, className, ...props }) => {
  return (
    <div className="flex flex-col gap-2 text-left">
      {label && (
        <label htmlFor={label} className="cursor-pointer text-xl font-normal">
          {label}
        </label>
      )}

      <input
        type="text"
        id={label}
        name={label}
        maxLength={50}
        className="py-2 px-4"
        required
        {...props}
      />
    </div>
  );
};

export default InputForm;
