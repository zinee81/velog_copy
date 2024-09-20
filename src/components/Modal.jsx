import { useRef, forwardRef, useImperativeHandle, useState } from "react";
import styles from "./Modal.module.css";

// forwardRef
const modal = forwardRef(function Modal(props, ref) {
  const [title, setTitle] = useState("");
  const dialogChild = useRef();
  const titleRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      openModal: (title) => {
        dialogChild.current.showModal();
        setTitle(title);
      },
    };
  });

  function Close() {
    dialogChild.current.close();
  }

  return (
    <dialog ref={dialogChild} className={styles.pop}>
      <h3 ref={titleRef}>{title}</h3>

      <button onClick={Close}>close</button>
    </dialog>
  );
});

export default modal;
