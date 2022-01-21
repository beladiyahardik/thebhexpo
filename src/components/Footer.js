import { faPen, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Input } from "antd";
import React, { useState } from "react";

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { TextArea } = Input;

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
      <div className="text-white font-25 mr-10 footerBtn d-flex x-center y-center space-around">
        <FontAwesomeIcon icon={faPlusSquare} />
        <FontAwesomeIcon icon={faPen} className="font-20" onClick={showModal} />
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
