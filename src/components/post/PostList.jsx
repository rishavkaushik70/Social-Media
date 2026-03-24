import Post from "./Post";
import WelcomeMessage from "../pages/WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {
        <div className="postContainer">
          {postList.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      }
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
