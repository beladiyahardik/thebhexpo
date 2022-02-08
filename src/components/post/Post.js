import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Post = ({username, content}) => {
  return(
      <div className="w-100 d-flex x-center">
      <div className="post p-10">
      <div className="head"> <FontAwesomeIcon icon={faUserAlt} /> {username}</div>
      <div>{content}</div>
      </div>
      </div>
  );
};

export default Post;
