import React, { useEffect } from "react";
import {useSelector} from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import Authentication from "../config/auth/Authentication";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.loggedUser.user)

  return (
    <div>
      <div className="w-100 p-10">
        <h1>Mixidory</h1>
      </div>
    </div>
  );
};

export default Header;
