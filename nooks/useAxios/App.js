import React, { useState, useRef, useEffect } from "react";
import useAxios from "./useAxios";

export default function App() {
  const { loading, data, refetch } = useAxios({
    url: "https://yts.am/api/v2/list_movies.json"
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}
