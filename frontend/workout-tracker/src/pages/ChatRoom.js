import React, { useState } from "react";
import SendIcon from '@mui/icons-material/Send';

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Gavin",
      message: "Hello, how are you? Are you interested in a swap?",
      time: "10:00 AM",
    },
    {
      id: 2,
      user: "Jack",
      message: "I'm good, thanks. Yes, what do you have?",
      time: "10:05 AM",
    }
    // Add more messages here
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();

    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        user: "You",
        message: inputValue,
        time: new Date().toLocaleTimeString(),
      },
    ]);

    setInputValue("");
  };

  return (
    <div className="px-4 py-6 bg-slate-100 h-64 overflow-y-scroll">
        <h2 className="text-2xl font-bold">Chat Room</h2>
      {messages.map((message) => (
        <div key={message.id} className="my-4">
          <p className="text-sm text-gray-600">{message.user} - {message.time}</p>
          <p className="text-gray-800">{message.message}</p>
        </div>
      ))}
      <form className="fixed bottom-0 left-0 right-0 bg-white py-4 flex" onSubmit={handleSendMessage}>
        <input
          className="w-full px-4 py-2 border border-gray-400"
          type="text"
          placeholder="Type your message here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="px-4 py-2 bg-yellow-400 text-white hover:bg-indigo-600">
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;

