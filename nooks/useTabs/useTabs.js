import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I am the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I am the content of the Section 2",
  },
];

export const useTabs = (initialTab, allTabs) => {
  const [currentIdx, setCurrentIdx] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIdx],
    changeItem: setCurrentIdx,
  };
};
