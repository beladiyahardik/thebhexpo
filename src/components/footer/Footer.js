import { Modal, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import HomeIcon from '../../assets/icons/home.png'
import post from '../../assets/icons/upload.png'
import pen from '../../assets/icons/pen.png'
import logoutIcon from '../../assets/icons/logout.png'
import defaultImage from '../../assets/images/profile/parrot.jpg'
import Authentication from "../../config/auth/Authentication";
import { Link } from "react-router-dom";
import { createPost, getPostAction } from "../../redux/actions/getPostAction";

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [postContent, setPostContent] = useState(undefined)
  const user = useSelector((state) => state.loggedUser.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { TextArea } = Input;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const typePost = (event) => {
    setPostContent({...postContent, content: event.target.value})
  }
  
  useEffect(()=>{
    setPostContent({...postContent, username: user.username})
  },[user])

  useEffect(()=>{
    console.log("postContent",postContent);
  },[postContent])
  
  const handleOk = () => {
    dispatch(createPost(postContent));
    setIsModalVisible(false);
    dispatch(getPostAction())
    setPostContent(null)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const logout = () => {
    Authentication.removeItem("isLogin");
    navigate("/");
  };

  return (
    <div className="w-100 d-flex y-center x-center footer">
      <div className="font-26 footerBtn d-flex x-center y-center space-around">

        <Link to="/home" className="font-20 text-black">
          <img src={HomeIcon} className='w-30' />
        </Link>
        <img src={post} className='w-30' />
        <img src={pen} className='w-30' onClick={showModal} />

        <Link to={`u/${user.username}`} className="font-20 text-black">
          <div><img src={defaultImage} className='w-30 round' /></div>
        </Link>

        <div onClick={logout}><img src={logoutIcon} className='w-30' /></div>
      </div>
      <Modal
        title="Create post"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <TextArea rows={5}  onChange={(e)=> typePost(e)} />
      </Modal>
    </div>
  );
};

export default Footer;
