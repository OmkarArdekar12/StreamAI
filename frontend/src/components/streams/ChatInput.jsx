import React, { useState } from "react";

const ChatInput = ({ addChat }) => {
  const [chat, setChat] = useState("");

  const handleAdd = () => {
    if (!chat.trim()) return;
    addChat(chat);
    setChat("");
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={chat}
        onChange={(e) => setChat(e.target.value)}
        placeholder="Add a chat..."
        className="input input-bordered flex-1"
      />
      <button onClick={handleAdd} className="btn btn-primary">
        Post
      </button>
    </div>
  );
};

export default ChatInput;
