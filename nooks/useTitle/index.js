import React, { useState, useEffect } from "react";
import useTitle from "./useTitle.js";

export default function App() {
  const titleUpdater = useTitle("Loading..."); //default값 Loading...
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}
