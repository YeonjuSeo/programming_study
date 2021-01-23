import React, { useState, useEffect, useRef } from "react";

// 스크롤한 정도에 따라 글자 색을 바꿔주는 hooks
export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = (event) => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    //Mount되었을 때만 이벤트 리스너 추가
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};
