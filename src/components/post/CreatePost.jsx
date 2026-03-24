import { useContext } from "react";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  return (
    <>
      <h1 className="postheading">Create your post</h1>{" "}
      <Form method="POST" className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your UserId :
          </label>
          <input
            name="userId"
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
            name="title"
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
            name="body"
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
            name="reactions.likes"
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
            name="reactions.dislikes"
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
            name="tags"
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
      </Form>
    </>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      addPost(post);
    });
  return redirect("/");
}

export default CreatePost;
