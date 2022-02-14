import React from "react";
import { useSelector } from "react-redux";
import defaultImage from '../../assets/images/profile/parrot.jpg'

const Profile = () => {
  const user = useSelector((state) => state.loggedUser.user)
  return (
    <>
     <div className="container bg-sky p-10 round-10">
       <div className="d-flex">
         <div><img src={defaultImage} className='w-200 round' /></div>
         <div className="text-lg tracking-wide">
           <div>{user.username}</div>
           <div className="d-flex">
           <div>followers {user.followers.length} | </div>
           <div>following {user.following.length}</div>
           </div>
         </div>
       </div>
      </div> 
    </>
  );
};

export default Profile;

