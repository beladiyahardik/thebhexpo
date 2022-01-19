import { Card } from "antd";
import React from "react";

const Home = () => {
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
