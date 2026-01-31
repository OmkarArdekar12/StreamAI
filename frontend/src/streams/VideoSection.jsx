import React from "react";
import { motion } from "framer-motion";
import StreamStats from "./StreamStats";

const VideoSection = ({ videoRef }) => {
  return (
    <div className="flex-1 flex flex-col items-center">
      <video
        ref={videoRef}
        controls
        autoPlay
        playsInline
        className="w-full rounded-lg shadow-lg"
      ></video>
      <StreamStats />
    </div>
  );
};

export default VideoSection;
