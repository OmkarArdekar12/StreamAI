import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const summaryText =
  "This video demonstrates building a responsive live streaming UI with comments, live transcript, timestamps, and interactive features using React, TailwindCSS, daisyUI, and Framer Motion.";

const Summary = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(summaryText.slice(0, index + 1));
      setIndex((prev) => (prev + 1 > summaryText.length ? 0 : prev + 1));
    }, 50); // typing speed (ms)

    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-700 text-white p-4 rounded-lg shadow-md w-[500px] font-normal"
    >
      <span className="text-gray-300">{displayedText}</span>
      <span className="animate-pulse">|</span>
    </motion.div>
  );
};

export default Summary;
