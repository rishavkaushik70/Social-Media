import { useContext, useRef } from "react";
import { PostList as PostContext } from "../../context/PostContext";

const CreatePost = () => {
  const { addPost } = useContext(PostContext);
  const userIdElement = useRef();
  const userTitleElement = useRef();
  const userBodyElement = useRef();
  const userLikesElement = useRef();
  const userDislikesElement = useRef();
  const userTagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const userTitle = userTitleElement.current.value;
    const userBody = userBodyElement.current.value;
    const userLikes = userLikesElement.current.value;
    const userDislikes = userDislikesElement.current.value;
    const postTags = userTagsElement.current.value.split(" ");

    userIdElement.current.value = " ";
    userTitleElement.current.value = " ";
    userBodyElement.current.value = " ";
    userTagsElement.current.value = " ";
    userDislikesElement.current.value = " ";
    userLikesElement.current.value = " ";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: userTitle,
        body: userBody,
        reactions: {
          likes: userLikes,
          dislikes: userDislikes,
        },
        userId: userId,
        tags: postTags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
      });
  };
  return (
    <>
      <h1 className="postheading">Create your post</h1>{" "}
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your UserId :
          </label>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            id="userId"
            aria-describedby="emailHelp"
            autoComplete="current-name"
            placeholder="Please enter your userId"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enter your Title :
          </label>
          <input
            ref={userTitleElement}
            type="text"
            className="form-control"
            id="title"
            autoComplete="current-title"
            placeholder="What's your Title?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Tell us more about your post :
          </label>
          <textarea
            ref={userBodyElement}
            rows={4}
            type="body"
            className="form-control"
            id="title"
            autoComplete="current-title"
            placeholder="Please write about your post "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="likevalue" className="form-label">
            Likes :
          </label>
          <input
            ref={userLikesElement}
            type="number"
            className="form-control"
            id="likeValue"
            autoComplete="current-title"
            placeholder="How many people reacted on your post?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dislikeValue" className="form-label">
            Dislikes :
          </label>
          <input
            ref={userDislikesElement}
            type="number"
            className="form-control"
            id="dislikeValue"
            autoComplete="current-title"
            placeholder="How many people reacted on your post?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your Tags :
          </label>
          <input
            ref={userTagsElement}
            type="text"
            className="form-control"
            id="tags"
            aria-describedby="emailHelp"
            placeholder="Write your Hashtags using Space"
          />
        </div>
        <div className="postbuttoncontainer">
          <button type="submit" className="btn btn-primary postbutton">
            Post
          </button>
        </div>
      </form>
    </>
  );
};

export default CreatePost;
