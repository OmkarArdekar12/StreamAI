import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEye, FaThumbsUp, FaComment } from "react-icons/fa";

const Analysis = () => {
  const [viewers, setViewers] = useState(1200);
  const [likes, setLikes] = useState(300);
  const [comments, setComments] = useState(50);
  const [engagement, setEngagement] = useState(0);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => prev + Math.floor(Math.random() * 5));
      setLikes((prev) => prev + Math.floor(Math.random() * 2));
      setComments((prev) => prev + Math.floor(Math.random() * 3));
      setEngagement(Math.floor(((likes + comments) / viewers) * 100));
    }, 3000);

    return () => clearInterval(interval);
  }, [likes, comments, viewers]);

  return (
    <div className="bg-gray-950 text-gray-300 p-4 rounded-lg shadow-md w-[500px] space-y-4">
      <h2 className="text-lg font-semibold">Live Stream Analysis</h2>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        <FaEye className="text-gray-400" /> <span>Viewers: {viewers}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-2"
      >
        <FaThumbsUp className="text-red-400" /> <span>Likes: {likes}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-2"
      >
        <FaComment className="text-purple-400" />{" "}
        <span>Comments: {comments}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-2"
      >
        <span className="font-semibold">Engagement:</span> {engagement}%
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="p-2 bg-gray-800 rounded shadow-sm text-gray-300 text-sm font-semibold"
      >
        Key Insight: Most viewers are engaging during the first 10 minutes of
        the stream.
      </motion.div>
    </div>
  );
};

export default Analysis;
