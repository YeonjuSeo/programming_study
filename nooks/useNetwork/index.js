import React, { useState, useEffect, useRef } from "react";
import useNetwork from "./useNetwork.js";

export default function App() {
  const handleNetworkChange = (online) =>
    console.log(online ? "We just went online" : "We are offline");
  const onLine = useNetwork();
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
}
