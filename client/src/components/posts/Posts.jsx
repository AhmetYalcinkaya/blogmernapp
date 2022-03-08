import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p, k) => (
        <Post key={k} post={p} />
      ))}
    </div>
  );
}
