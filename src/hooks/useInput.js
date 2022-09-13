import { useState } from "react";

export const useInput = (userData) => {
  const [value, setValue] = useState(userData);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};
