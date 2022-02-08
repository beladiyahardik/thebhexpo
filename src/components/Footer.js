import { faHome, faPen, faPlusSquare, faPowerOff, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Authentication from "../config/auth/Authentication";
import HomeIcon from '../assets/icons/home.png'
import post from '../assets/icons/upload.png'
import pen from '../assets/icons/pen.png'
import logoutIcon from '../assets/icons/logout.png'

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const user = useSelector((state) => state.loggedUser.user)
  const navigate = useNavigate();
  const { TextArea } = Input;

  const showModal = () => {
    setIsModalVisible(true);
  };

  useEffect(()=>{
    console.log("user",user);
  },[user])

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const logout = () => {
    Authentication.removeItem("isLogin");
    navigate("/");
  };

  const profile = () => {
    
  }

  return (
    <div className="w-100 d-flex y-center x-center footer">
      <div className="font-25 footerBtn d-flex x-center y-center space-around">

      <Link to="/home" className="font-20 text-black">
      <img src={HomeIcon} className='w-30' />
      </Link>
      <img src={post} className='w-30' />
      <img src={pen} className='w-30' onClick={showModal}/>
        
        <Link to="" onClick={profile} className="font-20 text-black"><FontAwesomeIcon icon={faUserCircle} /></Link>

        <Link to="" onClick={logout}><img src={logoutIcon} className='w-30' /></Link>
      </div>
      <Modal
        title="Create post"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <TextArea rows={5} />
      </Modal>
    </div>
  );
};

export default Footer;
