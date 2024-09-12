import { useState } from "react";
import Header from "./components/Header";
import Post from "./components/Post";

function App() {
  const [state, setState] = useState("trending");

  return (
    <>
      <Header state={state} setState={setState} />
      <Post state={state} />
    </>
  );
}

export default App;
