import { useParams } from "react-router-dom";
import "./singlePost.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  console.log(id);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${id}`);
      console.log(res);
      setPost(res.data);
    };
    getPost();
  }, [id]);

  return (
    <div className="singlePost">
      {/* <div className="singlePostWrapper">
        {post.photo && <img className="postImg" src={post.photo} alt="" />}:{" "}
        <img
          className="postImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div> */}
    </div>
  );
}
