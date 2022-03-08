import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="" />}:{" "}
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            {post.categories.map((c, key) => (
              <span key={key} className="postCat">
                {c.name}
              </span>
            ))}
          </span>
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
