import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
// import styles from "./components/PostForm.module.css";

function App() {
  const [category, setCategory] = useState("trending");
  const [showWrite, setShowWrite] = useState(false);

  return (
    <div className="wrapper">
      <Header category={category} setCategory={setCategory} showWrite={showWrite} setShowWrite={setShowWrite} />
      <Main category={category} setCategory={setCategory} showWrite={showWrite} />
    </div>
  );
  // <div className={styles.post_input}>
  //         <input type="text" name="title" id={styles.title} min="1" step="1" value="" placeholder="제목을 입력하세요" />
  //         <div className={styles.underline}></div>
  //         <input type="text" name="author" id="author" min="1" step="1" value="" placeholder="이름을 입력하세요" />
  //         <input type="text" name="author" id="author" min="1" step="1" value="" placeholder="썸네일로 쓸 이미지 링크를 입력하세요" />
  //         <textarea placeholder="당신의 이야기를 적어보세요..." value=""></textarea>
  //         <button>출간하기</button>
  //       </div>
}

export default App;
