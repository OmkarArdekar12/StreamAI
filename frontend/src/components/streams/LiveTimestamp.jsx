import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sampleTimestamps = [
  "[00:01] Welcome to the live stream!",
  "[00:05] This is a sample timestamp.",
  "[00:10] Enjoy the content!",
  "[00:15] Don't forget to subscribe!",
  "[00:20] Stay tuned for more updates.",
];

const LiveTimestampList = () => {
  const [visibleTimestamps, setVisibleTimestamps] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleTimestamps((prev) => [...prev, sampleTimestamps[index]]);
      index = (index + 1) % sampleTimestamps.length;
    }, 2000); // new timestamp every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-950 text-white p-4 rounded-lg shadow-md max-w-xl h-64 overflow-y-auto flex flex-col gap-2">
      <AnimatePresence>
        {visibleTimestamps.map((ts, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="font-mono text-sm bg-gray-900 p-2 rounded shadow-sm"
          >
            {ts}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default LiveTimestampList;
