import Post from "./Post";
import PostForm from "./PostForm";

export default function Main({ category, setCategory, showWrite }) {
  if (showWrite) {
    return <PostForm setCategory={setCategory} />;
  } else {
    return <Post category={category} />;
  }
}
