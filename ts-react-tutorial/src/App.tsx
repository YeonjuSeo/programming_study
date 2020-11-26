import React from "react";
import Greetings from "./Greetings";
import "./App.css";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} say Hello`);
  };
  return <Greetings name="React" onClick={onClick} />;
};

export default App;
