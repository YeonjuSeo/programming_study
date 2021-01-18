import React, { useState } from "react";
import "./styles.css";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    //위에서 true를 리턴 받으면 setValue 실행
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
