import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

// import styles from "./components/PostForm.module.css";
// 리액트 훅(hooks)'
// 1. useState(초기값)
// 2. useRef(초기값)
// useState -> 컴포넌트를 리빌드(UI변경)
// useRef -> 리빌드를 하지 않는다(UI변경 X)

function App() {
  const [category, setCategory] = useState("trending");
  const [showWrite, setShowWrite] = useState(false);

  // const idRef = useRef(null);
  // const passwordRef = useRef(null);

  // function onSubmit(e) {
  //   e.preventDefault();
  //   const id = idRef.current.value;
  //   const password = passwordRef.current.value;
  //   console.log(id, password);
  // }

  return (
    <div className="wrapper">
      <Header category={category} setCategory={setCategory} showWrite={showWrite} setShowWrite={setShowWrite} />
      <Main category={category} showWrite={showWrite} setShowWrite={setShowWrite} setCategory={setCategory} />

      {/* <form onSubmit={onSubmit}>
        <input type="text" id="id" ref={idRef} />
        <input type="text" id="password" ref={passwordRef} />
        <button type="submit">전송</button>
      </form> */}
    </div>
  );
}

export default App;
