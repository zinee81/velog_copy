import styles from "./Header.module.css";
import Tab from "./Tab.jsx";
import Weather from "./Weather.jsx";

export default function Header({ category, setCategory, showWrite, setShowWrite }) {
  return (
    <header>
      <div className={styles.header_title}>
        <div>
          <h3>velog</h3>
        </div>
        <div className={styles.new_post} onClick={() => (showWrite ? setShowWrite(false) : setShowWrite(true))}>
          <label className={styles.newbtn}>{showWrite ? "메인으로" : "새 글 작성"}</label>
        </div>
      </div>
      <div className={styles.header_title}>
        <div>{showWrite ? <></> : <Tab category={category} setCategory={setCategory} />}</div>
        <div>
          <Weather />
        </div>
      </div>
    </header>
  );
}
