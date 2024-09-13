import styles from "./DetailPage.module.css";

export default function DetailPage() {
  return (
    <dialog open>
      <h1>제목</h1>
      <div className={styles.author}>
        <b>작성자</b> · 2024년 9월 5일
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1725714835081-118a2b0456b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="500px" />
      </div>
      <div className={styles.content}>내용출력</div>
      <div className={styles.close}>
        <form method="dialog">
          <button>close</button>
        </form>
      </div>
    </dialog>
  );
}
