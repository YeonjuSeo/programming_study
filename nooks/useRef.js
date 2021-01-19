import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const potato = useRef();
  //5초 뒤에 input이 알아서 focus되도록
  setTimeout(() => potato.current?.focus(), 5000);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={potato} placeholder="la" />
    </div>
  );
}
