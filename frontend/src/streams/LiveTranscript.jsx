import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sampleText =
  "Welcome to the StreamAI! This is a live transcript example. Enjoy watching!";

const LiveTranscript = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(sampleText.slice(0, index + 1));
      setIndex((prev) => (prev + 1 > sampleText.length ? 0 : prev + 1));
    }, 100); // typing speed in ms

    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-950 text-white p-4 rounded-lg shadow-md w-[500px] font-mono"
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.div>
  );
};

export default LiveTranscript;
