import { useState } from "react";

export const useButton = () => {
  const [value, setValue] = useState(0);

  const handleClick = e => {
    e.preventDefault();
    setValue(value + 1);
  };

  return [value, setValue, handleClick];
};
