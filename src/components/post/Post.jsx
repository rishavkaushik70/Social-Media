import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostListContext } from "../../context/PostContext";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card cardBox" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}{" "}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDeleteForever />
          </span>{" "}
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtags">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          <span className="reactionsLike">Likes: {post.reactions.likes}</span>
          <span>Dislikes: {post.reactions.dislikes}</span>
        </div>
        <div className="alert alert-success reactions" role="alert">
          Views : {post.views}
        </div>
      </div>
    </div>
  );
};

export default Post;
