import Post from "./Post";
import PostForm from "./PostForm";
import { useState } from "react";
import { postData } from "./DUMMY_DATA.js";

export default function Main({ category, showWrite, setShowWrite }) {
  const [data, setData] = useState(postData);

  if (showWrite) {
    return <PostForm setData={setData} setShowWrite={setShowWrite} />;
  } else {
    return <Post category={category} data={data} />;
  }
}
