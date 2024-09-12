import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";

function Span({ isSelected, children, ...props }) {
  // 함수를 넣을때 : 괄호를 빼고 이름만 넣는다.
  return (
    <span {...props} className={isSelected ? "active" : "tab"}>
      {children}
    </span>
  );
}

export default function Header({ state, setState }) {
  return (
    <header>
      <h3>velog</h3>
      <Span onClick={() => setState("trending")} isSelected={state === "trending"}>
        <FontAwesomeIcon icon={faArrowTrendUp} /> 트렌딩
      </Span>
      <Span onClick={() => setState("latest")} isSelected={state === "latest"}>
        <FontAwesomeIcon icon={faClock} /> 최신
      </Span>
      <Span onClick={() => setState("feed")} isSelected={state === "feed"}>
        <FontAwesomeIcon icon={faRss} /> 피드
      </Span>
    </header>
  );
}
