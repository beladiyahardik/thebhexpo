import { faPen, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import React, { useState } from "react";

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="w-100 bg-black footer h-10vh d-flex y-center end">
      <div className="text-white font-25 mr-10 w-50">
        <FontAwesomeIcon icon={faPlusSquare} />
        <FontAwesomeIcon icon={faPen} className="font-20" onClick={showModal} />
      </div>
      <Modal
        title="Create post"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default Footer;
