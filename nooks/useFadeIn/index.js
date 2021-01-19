import React, { useState, useEffect, useRef } from "react";
import useFadeIn from "./useFadeIn.js";

export default function App() {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}> Hello </h1>
      <p {...fadeInP}>lorem ipsum lalalalal</p>
    </div>
  );
}
