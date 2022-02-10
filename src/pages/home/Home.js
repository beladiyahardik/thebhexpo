import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../components/post/Post";
import { getPostAction } from "../../redux/actions/getPostAction";

const Home = () => {
  const [post, setPost] = useState([]);
  const postList = useSelector(state => state.getPost.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAction());
  }, []);

  useEffect(() => {
      setPost(postList);
    },[postList]);

  return (
    <div>
      <div className="p-10">
        {post ? post.map((post, index) =>
          <Post key={index} username={post.username} content={post.content} />
        ) : 
        <h2>No Post Found</h2>
        }
      </div>
    </div>
  );
};

export default Home;
