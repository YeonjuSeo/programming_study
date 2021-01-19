import React, { useState, useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []); //componentDidMount 때만 작동되게 dependency 비워두기
  return { ref: element, style: { opacity: 0 } };
};
