import React from 'react';
import Image from '../images/profileimg.jpg'

const MessageInbox = () => (
  <div className="flex flex-col h-full">
    <div className="p-4 bg-gray-200 border-b border-gray-300">
    <h2 className="text-2xl font-bold">Messages</h2>
    </div>
    <div className="overflow-y-scroll h-full">
      <div className="p-4 border-b border-gray-300">
        <div className="flex items-center">
          <img src={Image} alt="Profile" className="w-10 h-10 rounded-full mr-4"/>
          <h3 className="text-lg font-medium">Gavin</h3>
        </div>
      </div>
      <div className="p-4 border-b border-gray-300">
        <div className="flex items-center">
        <img src={Image} alt="Profile" className="w-10 h-10 rounded-full mr-4"/>
          <h3 className="text-lg font-medium">User 2</h3>
        </div>
      </div>
      <div className="p-4 border-b border-gray-300">
        <div className="flex items-center">
        <img src={Image} alt="Profile" className="w-10 h-10 rounded-full mr-4"/>
          <h3 className="text-lg font-medium">User 3</h3>
        </div>
      </div>
    </div>
  </div>
);

export default MessageInbox;
