import Post from "./Post";
import PostForm from "./PostForm";
import { useState, useEffect } from "react";
import styles from "./Main.module.css";
import { postData } from "./DUMMY_DATA.js";

export default function Main({ category, showWrite, setShowWrite }) {
  const [data, setData] = useState({ trending: [], latest: [], feed: [] });

  useEffect(() => {
    const data = localStorage.getItem("postData");
    let postList = {};

    if (data) {
      postList = JSON.parse(data);
    } else {
      localStorage.setItem("postData", JSON.stringify(postData));
    }

    setData(postList);
  }, []);

  if (showWrite) {
    return <PostForm setData={setData} setShowWrite={setShowWrite} />;
  } else {
    return <div id={styles.wrap}>{data[category].length === 0 ? <div>새로운 피드가 없네요.</div> : data[category].map((post) => <Post post={post} key={post.id} setData={setData} category={category} />)}</div>;
  }
}
