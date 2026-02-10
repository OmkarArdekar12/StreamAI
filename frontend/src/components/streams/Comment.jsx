import React from "react";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import { motion } from "framer-motion";

const Comment = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-black/20 text-white p-3 rounded-lg shadow-md max-w-xl"
    >
      <p className="mb-2 text-gray-300">{text}</p>
      <div className="flex gap-4 text-gray-400 text-sm">
        <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer text-xs">
          <FaThumbsUp className="size-3" /> Like
        </div>
        <div className="flex items-center gap-1 hover:text-purple-500 cursor-pointer text-xs">
          <FaComment className="size-3" /> Reply
        </div>
      </div>
    </motion.div>
  );
};

export default Comment;
