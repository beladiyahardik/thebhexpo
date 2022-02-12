import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Like from '../../assets/icons/like.png'
import Share from '../../assets/icons/share.png'
import React from "react";

const Post = ({username, content}) => {
  return(
      <div className="post p-10 bg-white">
      <div className="head font-16"> <FontAwesomeIcon icon={faUserAlt} /> <span className="ml-5">{username}</span></div>
      <div className="font-20 p-10">{content}</div>
      <div className="d-flex">
        <div> <img className="w-25" src={Like} /> </div>
        <div><img className="w-25 ml-10" src={Share} /> </div>
      </div>
      </div>
  );
};

export default Post;
