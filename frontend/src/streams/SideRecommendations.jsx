import React from "react";
import { motion } from "framer-motion";
import { FaVideo, FaRegListAlt, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaPlayCircle, FaFire } from "react-icons/fa";

const previousStreams = [
  {
    id: 1,
    title: "Code with AI",
    viewers: "2.3K watching",
    video: "/preview/1.webm",
  },
  {
    id: 2,
    title: "AI Fitness Trainer",
    viewers: "1.1K watching",
    video: "/preview/2.webm",
  },
  {
    id: 3,
    title: "Movie Talk Live",
    viewers: "3.5K watching",
    video: "/preview/3.webm",
  },
  {
    id: 4,
    title: "Gaming Legends",
    viewers: "5.7K watching",
    video: "/preview/4.mp4",
  },
  {
    id: 5,
    title: "Art with AI",
    viewers: "876 watching",
    video: "/preview/5.mp4",
  },
  {
    id: 6,
    title: "Tech Reviews Live",
    viewers: "4.2K watching",
    video: "/preview/6.mp4",
  },
  {
    id: 7,
    title: "Music Jam Session",
    viewers: "2.9K watching",
    video: "/preview/7.mp4",
  },
  {
    id: 8,
    title: "Travel Adventures",
    viewers: "3.1K watching",
    video: "/preview/8.mp4",
  },
];

const SideRecommendations = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-4 px-8">
      <h2 className="text-xl text-gray-300 font-semibold mb-2">
        Recommended Videos
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {previousStreams.map((stream) => (
          <motion.div
            key={stream.id}
            onClick={() => navigate("/player")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: (stream.id + 1) * 0.1 }}
            className="relative group overflow-hidden rounded-2xl shadow-lg bg-gray-950 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
          >
            <video
              src={stream.video}
              className="w-full h-56 object-cover group-hover:opacity-75 transition-all"
              autoPlay
              muted
              loop
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-xl font-bold mb-1">{stream.title}</h3>
              <p className="text-sm text-gray-400">{stream.viewers}</p>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/70 flex justify-center items-center">
              <button className="btn btn-sm bg-red-500 border-none hover:bg-red-600 rounded-full shadow-md">
                <FaPlayCircle className="mr-2" /> Watch Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SideRecommendations;
