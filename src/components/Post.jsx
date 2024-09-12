import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { postData } from "./DUMMY_DATA.js";

export default function Post({ state }) {
  function dateString(createdAt) {
    const date = new Date(createdAt);

    return <>{`${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(2, "0")}월 ${String(date.getDate()).padStart(2, "0")}일`}</>;
  }

  return (
    <>
      <div id="wrap">
        {postData[state].map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="post_img">
                <img src={post.image} alt="포스트 이미지" />
              </div>
              <div className="content">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <div className="date">
                  {dateString(post.createdAt)} · {post.comments}개의 댓글
                </div>
              </div>
              <div className="footer">
                <span className="by">
                  <img src={post.userImage} alt="사용자" />
                  by <label className="byid"> {post.author}</label>
                </span>
                <span className="like">
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
