import React, { useState, useEffect } from "react";

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  //title을 업데이트하고 업데이트 되면 다시 updateTitle을 부른다.
  useEffect(updateTitle, [title]);
  return setTitle;
};
