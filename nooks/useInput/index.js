import React, { useState } from "react";
import useInput from "./useInput.js";

export default function App() {
  //길이가 10 이하라면 true를 리턴
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Ms.", maxLen);
  return (
    <div className="App">
      <h1>Hello </h1>
      {/* <input placeholder="Name" value={name.value} 아래와 같은 뜻/> */}
      <input placeholder="Name" {...name} />
    </div>
  );
}
