import React, { useState, useEffect, useRef } from "react";
import useBeforeLeave from "./useBeforeLeave.js";

export default function App() {
  const begForLife = () => console.log("Please don't leave");
  //아무것도 리턴하지 않으므로 아래와 같이 쓰면 됨
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
