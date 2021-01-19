import React, { useState, useEffect, useRef } from "react";
import useClick from "./useClick.js";

export default function App() {
  const sayHello = () => console.log("sayHello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}
