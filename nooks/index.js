import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>Decrement</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
}
