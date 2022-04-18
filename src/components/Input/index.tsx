import React, { InputHTMLAttributes, useCallback} from "react";
import { phone } from "./masks";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "phone",
}

export const Input: React.FC<InputProps> = ({mask, ...props}) => {
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    if(mask === "phone") {
      phone(e);
    }
  }, []);

  return (
    <input {...props} onKeyUp={handleKeyUp}/>
  );
}