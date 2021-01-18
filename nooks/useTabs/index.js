import React, { useState } from "react";

export default function App() {
  const { currentItem, changeItem } = useTabs(1, content); //0번째 탭을 첫번째로
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
