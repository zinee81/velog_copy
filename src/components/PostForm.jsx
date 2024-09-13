import { useState } from "react";
import styles from "./PostForm.module.css";

export default function PostForm({ setCategory }) {
  // const [text, setText] = useState({id:"",title:"",content:"",author:"",createdAt:"",image:"",likes:"",userImage:"",comments:""});

  function submitForm() {
    // setText("");
    // prev : 데이터를 넣기전 기존에 있던 값
    setCategory();
  }

  return (
    <div className={styles.post_input}>
      <input type="text" name="title" id={styles.title} min="1" step="1" placeholder="제목을 입력하세요" />
      <div className={styles.underline}></div>
      <select name="category" id="category">
        <option value="trending">카테고리를 선택하세요</option>
        <option value="trending">트렌딩</option>
        <option value="latest">최신</option>
        <option value="feed">피드</option>
      </select>
      <input type="text" name="author" id="author" min="1" step="1" placeholder="이름을 입력하세요" />
      <input type="text" name="author" id="author" min="1" step="1" placeholder="썸네일로 쓸 이미지 링크를 입력하세요" />
      <textarea placeholder="당신의 이야기를 적어보세요..."></textarea>
      <button onClick={submitForm}>출간하기</button>
    </div>
  );
}
