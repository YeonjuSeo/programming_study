import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDo }) {
  //   console.log(props); //mapStateToProps로 props에 들어간 객체에 toDo가 잘 들어가있다!
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  ); //?가 없으면 새로고침해서 사라진 state때문에 에러가 난다
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  console.log(id);
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
