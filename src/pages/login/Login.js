import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Switch } from "antd";
import { LoginAction } from "../../redux/actions/loginAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Authentication from "../../config/auth/Authentication";

const Login = () => {
  const [userData, setUserData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = useSelector(state => state.loggedUser.user);

  const handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const userLogin = () => {
    dispatch(LoginAction(userData));
  };

  useEffect(
    () => {
      console.log("loginUser", loginUser);
      if (loginUser.userFound) {
        Authentication.getItem("isLogin") && navigate("/home");
      }
    },
    [loginUser],
  );

  return (
    <div>
      <div className="login d-flex x-center h-100vh y-center w-100">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 32 }}
          initialValues={{ remember: true }}
          autoComplete="off">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}>
            <Input name="username" onChange={e => handleChange(e)} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}>
            <Input.Password name="password" onChange={e => handleChange(e)} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Button type="primary" htmlType="submit" onClick={userLogin}>
              Login
            </Button>
            <Link to="/signup">Signup</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
