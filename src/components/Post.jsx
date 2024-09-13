import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { postData } from "./DUMMY_DATA.js";
import styles from "./Post.module.css";

export default function Post({ category }) {
  function getDate(createdAt) {
    const postDate = new Date(createdAt);
    const nowDate = new Date();

    const diffDate = nowDate.getTime() - postDate.getTime();

    let date = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24)));

    if (date < 7) {
      return `${date}일 전`;
    } else {
      return `${postDate.getFullYear()}년 ${String(postDate.getMonth() + 1).padStart(2, "0")}월 ${String(postDate.getDate()).padStart(2, "0")}일`;
    }
  }

  return (
    <>
      <div id={styles.wrap}>
        {postData[category].map((post) => {
          return (
            <div className={styles.post} key={post.id}>
              <div className={styles.post_img}>
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
          );
        })}
      </div>
    </>
  );
}
