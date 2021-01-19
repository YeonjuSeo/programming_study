import React, { useState, useEffect, useRef } from "react";

//navigator가 online 또는 offline이 되는 걸 막아주는 hooks
export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine); //기본값으로 navigator가 online인지 아닌지 반환
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    //componentWillUnmount 때 eventlistener 정리하기
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
