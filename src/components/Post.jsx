import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./Post.module.css";
import DetailPage from "./DetailPage";
import { useRef } from "react";
import { removePost } from "./localStorage.js";

export default function Post({ post, setData, category }) {
  const dialogRef = useRef();

  function getDate(createdAt) {
    const postDate = new Date(createdAt);
    const nowDate = new Date();

    const diffDate = nowDate.getTime() - postDate.getTime();

    let date = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24)));

    if (date === 0) {
      return `오늘`;
    } else if (date < 7) {
      return `${date}일 전`;
    } else {
      return `${postDate.getFullYear()}년 ${String(postDate.getMonth() + 1).padStart(2, "0")}월 ${String(postDate.getDate()).padStart(2, "0")}일`;
    }
  }

  function openPost() {
    dialogRef.current.openModal();
  }

  function deletePost(id) {
    // const newData = data[category].filter((post) => post.id !== id);
    setData((prev) => ({ ...prev, [category]: [...removePost(id, category)] }));
  }

  return (
    <>
      <DetailPage post={post} ref={dialogRef} postDate={getDate(post.createdAt)} />

      <div className={styles.post} key={post.id} onClick={openPost}>
        <div className={styles.post_img}>
          <div className={styles.delete}>
            <button onClick={() => deletePost(post.id)}>삭제</button>
          </div>
          <img src={post.image} alt="포스트 이미지" />
        </div>
        <div className={styles.content}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div className={styles.date}>
            {getDate(post.createdAt)} · {post.comments}개의 댓글
          </div>
        </div>
        <div className={styles.footer}>
          <span className={styles.by}>
            <img src={post.userImage} alt="사용자" />
            by <label className={styles.byid}> {post.author}</label>
          </span>
          <span className={styles.like}>
            <FontAwesomeIcon icon={faHeart} /> {post.likes}
          </span>
        </div>
      </div>
    </>
  );
}
