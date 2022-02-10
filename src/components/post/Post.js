import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Post = ({username, content}) => {
  return(
    
      <div className="w-100">
      <div className="post p-10 bg-white">
      <div className="head font-15"> <FontAwesomeIcon icon={faUserAlt} /> <span className="ml-5">{username}</span></div>
      <div className="font-20 p-10">{content}</div>
      </div>
      </div>
  );
};

export default Post;
