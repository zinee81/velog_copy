import { useState, useRef } from "react";
import styles from "./PostForm.module.css";

export default function PostForm({ setData, setShowWrite }) {
  const titleRef = useRef();
  const categoryRef = useRef();
  const authorRef = useRef();
  const imageRef = useRef();
  const contentRef = useRef();

  function onSubmit(e) {
    e.preventDefault();

    const title = titleRef.current.value;
    const category = categoryRef.current.value;
    const author = authorRef.current.value;
    const image = imageRef.current.value;
    const content = contentRef.current.value;

    // setCategory(category);

    const data = { id: Date.now(), title: title, content: content, author: author, createdAt: Date.now(), image: image, likes: 0, userImage: "https://randomuser.me/api/portraits/women/18.jpg", comments: 0 };

    setData((prev) => {
      // form에서 받아온 새로운 데이터
      const newData = data;
      // 기존데이터에서 선택한 카테고리에 맞는 배열값 가져오기
      const prevArray = prev[category];
      // 배열에 새로운 데이터 push하기
      const newArray = [...prevArray, newData];
      // prevArray.push(newData)
      // 객체반환
      return {
        // 기존 객체의 값 넣기
        ...prev,
        // 선택된 카테고리의 값을 push된 배열값 넣어주기
        [category]: [...newArray],
      };
    });

    setShowWrite(false);

    // setData((prev) => {
    //   return { ...prev, category: [...prev[category], data] };
    // });
  }

  return (
    <div className={styles.post_input}>
      <form onSubmit={onSubmit}>
        <input type="text" id={styles.title} placeholder="제목을 입력하세요" ref={titleRef} />
        <div className={styles.underline}></div>
        <select id="category" ref={categoryRef}>
          <option value="trending">카테고리를 선택하세요</option>
          <option value="trending">트렌딩</option>
          <option value="latest">최신</option>
          <option value="feed">피드</option>
        </select>
        <input type="text" id="author" placeholder="이름을 입력하세요" ref={authorRef} />
        <input type="text" id="image" placeholder="썸네일로 쓸 이미지 링크를 입력하세요" ref={imageRef} />
        <textarea id="content" placeholder="당신의 이야기를 적어보세요..." ref={contentRef}></textarea>
        <button type="submit">출간하기</button>
      </form>
    </div>
  );
}
