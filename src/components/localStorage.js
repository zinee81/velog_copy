// 게시물 읽어오기 (read)
export function getPost() {
  // data -> "["할일","리액트연습"]" -> string
  const data = localStorage.getItem("postData");

  // 데이터가 존재할 때
  if (data) {
    // JSON 문자열 -> 자바스크립트 객체로 변환
    return JSON.parse(data);
  }
  // 데이터가 존재하지 않을 때
  else {
    return [];
  }
}

// 게시물 저장 (create)
/**
 * @param {Array} post
 */
export function setPost(post) {
  // JSON -> "["리액트","자바스크립트"]"
  // JSON으로 변환하지 않고 넣으면 -> "[리액트,자바스크립트]"
  localStorage.setItem("postData", JSON.stringify(post));
}

// 게시물 삭제 (remove)
export function removePost(postId, category) {
  // 현재 가지고 있는 post 가져오기
  const postList = getPost();
  // filter메서드를 사용하여 게시물 삭제
  const newPost = postList[category].filter((post) => post.id !== postId);
  const dataPost = { ...postList, [category]: [...newPost] };

  setPost(dataPost);
  return newPost;
}
