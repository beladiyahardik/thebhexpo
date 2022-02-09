import React from "react";
import { useParams } from "react-router-dom";
import defaultImage from '../../assets/images/profile/parrot.jpg'

const Profile = () => {
  const { username } = useParams();
  return (
    <>
     <div className="container bg-sky p-10 round-10">
       <div className="d-flex">
         <div className=""><img src={defaultImage} className='w-200 round' /></div>
         <div className="ml-50 d-flex left y-center">
           <h1>{username}</h1>
           </div>
       </div>
       </div> 
    </>
  );
};

export default Profile;
