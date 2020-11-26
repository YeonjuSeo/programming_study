import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; //아무것도 리턴하지 않는 함수를 의미한다.
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello,{name} {mark}
      {optional && <p>{optional}</p>}
      {/*optional을 true로 변환할 수 있는 경우 <p>{optional}</p>을 반환하고, 그렇지 않으면 optional을 반환합니다.*/}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
