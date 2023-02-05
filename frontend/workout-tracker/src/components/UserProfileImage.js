import React from "react";
// Image
import UserProfile from '../images/profileimg.jpg'

const UserDashboard = ({name}) => {
  return (
    <div className="flex items-center justify-center p-10">
      <img
        src={UserProfile}
        alt="Profile"
        className="w-16 h-16 rounded-full"
      />
      <div className="ml-10">
        <h2 className="text-2xl font-bold">Your Dashboard</h2>
        <p className="text-gray-600">Hello, {name}!</p>
        <p className="text-gray-600">Whistler, BC</p>
      </div>
    </div>
  );
};

export default UserDashboard;
