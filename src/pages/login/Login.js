import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { LoginAction } from "../../redux/actions/loginAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Authentication from "../../config/auth/Authentication";

const Login = () => {
  const [userData, setUserData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = useSelector(state => state.loggedUser.user);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const userLogin = () => {
    dispatch(LoginAction(userData));
  };

  useEffect(() => {
    if (loginUser.userFound && Authentication.getItem("isLogin")) {
      navigate("/home");
    }
  }, [loginUser]);

  return (
    <>
      <div className="flex justify-around items-center h-98vh overflow-hidden">
        <div className="w-45">
          <img src="./assets/img/login-side-img-6.jpg" alt="" width="100%" height="100%" />
        </div>
        <div className="w-45 p-24">
          <div className="shadow-2xl p-24 rounded-lg">
              <label htmlFor="" className="w-full ml-3 text-lg font-serif">Username</label>
              <input type="text" name="username" onChange={e => handleChange(e)} placeholder="Username" className="mt-1 mb-5 w-full shadow-md font-serif outline-0 px-4 py-4 rounded-sm" />
              <label htmlFor="" className="w-full ml-3 text-lg font-serif">Password</label>
              <input type="password" name="password" onChange={e => handleChange(e)} placeholder="Password" className="mt-1 w-full mb-5 shadow-md font-serif px-4 py-4 outline-0 rounded-sm" />
              <button className="rounded-sm bg-buttoncolor text-white font-serif  px-6 py-2 " onClick={userLogin} >Login</button>
              <Link to='signup' className="px-6 py-3 ">Signup</Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default Login;
