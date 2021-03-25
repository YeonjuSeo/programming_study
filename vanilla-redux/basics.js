import { createStore } from "redux"; //redux는 data 관리를 도와주는 역할
//store는 data, 즉 state를 넣는 곳
//state는 application에서 바뀌는 data를 말한다.

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//html에 띄우기 시작
number.innerText = 0;

// 문자열로 "ADD", "MINUS"를 쓰기보다는 변수로 지정해서 사용하자!
// 단순 문자열 오타는 js가 말해주지 않지만 등록되지 않은 변수의 사용은 오류로 알려주니까!
const ADD = "ADD";
const MINUS = " MINUS";

//data를 modify할 함수 reducer인 countModifier
//data를 modify 할 수 있는 유일한 함수!!
//reducer가 리턴하는 것은 무엇이든지 application의 state가 된다
const countModifier = (count = 0, action) => {
  // if-else 문보다는 스위치문
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier); //data를 저장하는 곳

const onChange = () => {
  //html에 변경사항 띄우기
  number.innerText = countStore.getState();
};

//subscribe는 store 안에 있는 변화들을 알 수 있게 해줌
countStore.subscribe(onChange);

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", handleMinus);
