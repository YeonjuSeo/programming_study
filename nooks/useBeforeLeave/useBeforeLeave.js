import React, { useState, useEffect, useRef } from "react";

//마우스가 페이지를 벗어나서 상단의 상태표시줄로 이동하는 걸 감지하는 Hooks
export const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    //console.log(event);
    const { clientY } = event;
    //위로 올라갔을 때만 Please don't leave 띄우도록
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore === "function") {
      document.addEventListener("mouseleave", handle);
    } else {
      return;
    }
    //componentWillUnmount일 때 이 event 삭제
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
