import Post from "./Post";
import PostForm from "./PostForm";
import { useState, useEffect } from "react";
import styles from "./Main.module.css";
import { postData } from "./DUMMY_DATA.js";
import ModifyForm from "./ModifyForm.jsx";

export default function Main({ category, showWrite, setShowWrite, setCategory }) {
  const [data, setData] = useState({ trending: [], latest: [], feed: [] });
  const [mod, setMod] = useState();
  const [modId, setModId] = useState();

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("postData"));

    if (!localData) {
      localStorage.setItem("postData", JSON.stringify(postData));
      localData = JSON.parse(localStorage.getItem("postData"));
    }

    setData(localData);
  }, []);

  if (showWrite) {
    if (mod) {
      return <ModifyForm modId={modId} category={category} />;
    } else {
      return <PostForm setData={setData} setShowWrite={setShowWrite} />;
    }
  } else {
    return <div id={styles.wrap}>{data[category].length === 0 ? <div>새로운 피드가 없네요.</div> : data[category].map((post) => <Post post={post} key={post.id} setData={setData} category={category} setShowWrite={setShowWrite} setMod={setMod} setModId={setModId} setCategory={setCategory} />)}</div>;
  }
}
