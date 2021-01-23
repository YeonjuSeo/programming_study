import React, { useState, useEffect, useRef } from "react";

export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        //Chrome
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        //FireFox
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        //Opera
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        //Microsoft
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    if (element.current.exitFullscreen) {
      //Chrome
      element.current.exitFullscreen();
    } else if (element.current.mozCancelFullScreen) {
      //FireFox
      element.current.mozCancelFullScreen();
    } else if (element.current.webkitExitFullscreen) {
      //Opera
      element.current.webkitExitFullscreen();
    } else if (element.current.msExitFullscreen) {
      //Microsoft
      element.current.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
