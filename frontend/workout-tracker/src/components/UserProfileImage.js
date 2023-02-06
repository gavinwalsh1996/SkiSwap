import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const UserDashboard = ({data}) => {
  const {heading, subHeading, image, paragraph} = data

  return (
    <div className="flex items-center justify-center p-10">
      <img
        src={image}
        alt="Profile"
        className="w-16 h-16 rounded-full"
      />
      <div className="ml-10">
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="text-gray-600 font-bold">{subHeading}</p>
        <div className="flex gap-2">
          <p className="text-gray-600">{paragraph}</p>
          <MoreHorizIcon sx={{cursor: 'pointer'}}/>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
