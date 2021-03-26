import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

//props 안의 toDos만
function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// connect()는 Home으로 보내는 props에 추가될 수 있도록 허용해준다.
function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    // addToDo라는 function
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}
// connect는 component에 store를 연결해서 state에 접근할 수 있게 한다
// 2가지 arguments를 받아서 선택할 수 있게한다. getState 혹은 dispatch (둘 다도 가능)
//mapStateToProps ; store에 있는 state를 getState() 해서 component에 props로 전달함
export default connect(mapStateToProps, mapDispatchToProps)(Home);
