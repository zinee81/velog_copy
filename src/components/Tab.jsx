import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import styles from "./Tab.module.css";

function Span({ isSelected, children, ...props }) {
  // 함수를 넣을때 : 괄호를 빼고 이름만 넣는다.
  return (
    <span {...props} className={isSelected ? styles.active : styles.tab}>
      {children}
    </span>
  );
}

export default function Tab({ category, setCategory }) {
  return (
    <>
      <Span onClick={() => setCategory("trending")} isSelected={category === "trending"}>
        <FontAwesomeIcon icon={faArrowTrendUp} /> 트렌딩
      </Span>
      <Span onClick={() => setCategory("latest")} isSelected={category === "latest"}>
        <FontAwesomeIcon icon={faClock} /> 최신
      </Span>
      <Span onClick={() => setCategory("feed")} isSelected={category === "feed"}>
        <FontAwesomeIcon icon={faRss} /> 피드
      </Span>
    </>
  );
}
