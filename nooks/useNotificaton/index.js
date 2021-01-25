import React, { useState, useRef, useEffect } from "react";
import useNotification from "./useNotificaton.js";

export default function App() {
  const triggerNotif = useNotification("Can I eat your pizza?", {
    body: "I love pizza",
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
}
