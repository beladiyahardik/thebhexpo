import { Card } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPostAction } from "../../redux/actions/getPostAction";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostAction());
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <Card
        title="Card title"
        bordered={true}
        style={{ width: "300px", color: "#000" }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
};

export default Home;
