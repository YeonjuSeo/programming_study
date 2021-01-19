import React, { useState, useEffect } from "react";

export default function App() {
  const sayHello = () => console.log("hello");
  //componentDidMount와 componentDidUpdate 역할을 useEffect가 한다
  //useEffect는 함수를 반환하는데 이게 compoenentWillUnMount에서 쓰인다
  //그래서 총 3가지의 역할을 한다
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  //useEffect(componentDidMount에서 실행될 함수,componentDidUpdate로 실행될 배열)
  useEffect(sayHello, [number]);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}
