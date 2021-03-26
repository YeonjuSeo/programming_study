import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      //   console.log(action); //이걸 보면 action.payload가 이전의 text에 해당하는 내용이 있다는 것을 알 수 있음
      //toolkit을 사용하면 action에 보내고 싶어하는 정보가 무엇이든지 payload와 함께 보내진다.
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      console.log(action);
      // createAction으로 만들어진 action으로부터 뭔가를 받으면 그건 action.payload로 가므로 action.payload 사용
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

//subscribe ; 변화가 생길 때마다 Application을 rerender하고싶다!

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
