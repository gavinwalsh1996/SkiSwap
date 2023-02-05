import React from "react";

const UserDashboard = ({name}) => {
  return (
    <div className="flex items-center justify-center p-10">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="w-12 h-12 rounded-full"
      />
      <div className="ml-10">
        <h2 className="text-2xl font-bold">Your Dashboard</h2>
        <p className="text-gray-600">Hello, {name}!</p>
      </div>
    </div>
  );
};

export default UserDashboard;
