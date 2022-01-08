import { HomeOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Authentication from "../config/auth/Authentication";

const Header = () => {
  const navigate = useNavigate()
  const logout = () => {
    Authentication.removeItem('isLogin')
    navigate('/')
  }
  return (
    <div>
      <div className="navbar bg-black text-white d-flex space-around y-center">
        <div className="navbar" />
        <ul className="links d-flex space-around w-100">
          <li>
            <Link to="/home" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="" className="text-white">
              Contact
            </Link>
          </li>
          <li>
            <Link to="" className="text-white">
              Privacy Policy
            </Link>
          </li>
          <li>
            {
              Authentication.getItem('isLogin') ?
                <Link to='' onClick={logout} className="text-white">Logout</Link>:
                <Link to="/login" className="text-white">Login</Link>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
