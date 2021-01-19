import React, { useState, useEffect, useRef } from "react";

//useRef가 있고 element를 똑같이 return해줘서 title과 상호작용 가능
export const useHover = (onClick) => {
  if (typeof onHover !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    //dependency가 없을 때 useEffect가 mount 또는 update 되면 아래를 호출
    //(없다면 componentDidMount때만 호출)
    //reference 안에 element.current가 있는지 확인
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    //componentWillUnmount 되면 알아서 아래를 리턴함
    //알아서 EventListner 정리하기
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  //dependency가 있다면 update될 때마다 EventListener가 생길 것임
  //no Dependencies라서 Update된 이후는 생각할 필요 없음
  return element;
};
