import React, { useState, useEffect, useRef } from "react";
import useHover from "./useHover.js";

export default function App() {
  const sayHello = () => console.log("sayHello");
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}
