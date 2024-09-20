import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./DetailPage.module.css";

const detailPage = forwardRef(function DetailPage({ post, postDate }, ref) {
  const dialogChild = useRef();

  useImperativeHandle(ref, () => {
    return {
      openModal: () => {
        dialogChild.current.showModal();
      },
    };
  });

  function Close() {
    dialogChild.current.close();
  }

  return (
    <dialog ref={dialogChild}>
      <h1>{post.title}</h1>
      <div className={styles.author}>
        <b>{post.author}</b> · {postDate}
      </div>
      <div className={styles.imgdiv}>
        <img src={post.image} alt="" className={styles.postimg} />
      </div>
      <div className={styles.content}>{post.content}</div>
      <div className={styles.close}>
        <button onClick={Close}>close</button>
      </div>
    </dialog>
  );
});

export default detailPage;
