import { createStore } from "redux";
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// 이전의 reducer는 state를 mutate하지 못하고 매번 새로운 state를 반환해야했지만
//createReducer를 사용하면 state를 mutate할 수 있다.
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // state를 mutate하는 경우 return 하지 말아야한다.(push는 아무것도 리턴하지 X)
    // mutate하지만 return하는데 return은 언제나 새로운 state로 해야한다.(filter는 return값이 존재)
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

const store = configureStore({ reducer });

//subscribe ; 변화가 생길 때마다 Application을 rerender하고싶다!

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
