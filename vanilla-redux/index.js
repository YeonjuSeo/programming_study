import { createStore } from "redux"; //redux는 data 관리를 도와주는 역할
//store는 data, 즉 state를 넣는 곳
//state는 application에서 바뀌는 data를 말한다.

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

//data를 modify할 함수 reducer인 countModifier
//data를 modify 할 수 있는 유일한 함수!!
const countModifier = (count = 0, action) => {
  // console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier); //data를 저장하는 곳

const onChange = () => {
  number.innerText = countStore.getState();
};

//subscribe는 store 안에 있는 변화들을 알 수 있게 해줌
countStore.subscribe(onChange);

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", handleMinus);
