import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-black text-white d-flex space-around y-center">
        <div className="navbar" />
        <ul className="links d-flex space-around w-100">
          <li>
            <Link to="" className="text-white">
              Home{" "}
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
