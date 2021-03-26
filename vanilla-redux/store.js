import { configureStore, createSlice } from "@reduxjs/toolkit";

// createSlice는 reducer와 action 둘 다를 제공한다!
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// createSlice는 알아서 reducer를 제공
const store = configureStore({ reducer: toDos.reducer });

// toDos의 action에서 add와 remove를 가져다 쓰기
export const { add, remove } = toDos.actions;

export default store;
