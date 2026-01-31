import React, { useState } from "react";

const CommentInput = ({ addComment }) => {
  const [comment, setComment] = useState("");

  const handleAdd = () => {
    if (!comment.trim()) return;
    addComment(comment);
    setComment("");
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        className="input input-bordered flex-1"
      />
      <button onClick={handleAdd} className="btn btn-primary">
        Post
      </button>
    </div>
  );
};

export default CommentInput;
