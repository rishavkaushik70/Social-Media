import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if (action.type === "CREATE_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "CREATE_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (
    userName,
    userId,
    userTitle,
    userBody,
    userReactions,
    postTags,
  ) => {
    dispatchPostList({
      type: "CREATE_POST",
      payload: {
        id: Date.now(),
        userName: userName,
        title: userTitle,
        body: userBody,
        reactions: userReactions,
        userId: userId,
        tags: postTags,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "CREATE_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        addInitialPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
