import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaVideo, FaRegListAlt, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaPlayCircle, FaFire } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("goLive");
  const [showGoLiveModal, setShowGoLiveModal] = useState(false);

  const user = {
    name: "Streamer",
    profilePic: "/images/streamer.png",
    subscribers: "15.5K",
    totalViews: "10.1M",
    totalStreams: 45,
  };

  const tabs = [
    { id: "goLive", label: "Go Live", icon: <FaVideo /> },
    { id: "previous", label: "Previous Streams", icon: <FaRegListAlt /> },
    { id: "settings", label: "Settings", icon: <FaCog /> },
  ];

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

  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen text-white p-6 pt-10">
        {/* Profile Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-gray-950 p-6 rounded-lg shadow-lg border-l-4 border-red-600">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-red-600"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2 text-red-500">
              {user.name}
            </h2>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start text-gray-300">
              <div>
                <span className="font-semibold">{user.subscribers}</span>{" "}
                Subscribers
              </div>
              <div>
                <span className="font-semibold">{user.totalViews}</span> Total
                Views
              </div>
              <div>
                <span className="font-semibold">{user.totalStreams}</span> Live
                Streams
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6">
          <div className="flex flex-wrap gap-4 border-b border-red-600 pb-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                  activeTab === tab.id
                    ? "bg-red-600 text-white"
                    : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                }`}
              >
                {tab.icon} {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "goLive" && (
              <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-2 text-red-500">
                  Start your live stream
                </h3>
                <p className="text-gray-300 mb-4">
                  Click the button below to go live!
                </p>
                <button
                  className="btn btn-error"
                  onClick={() => setShowGoLiveModal(true)}
                >
                  Go Live
                </button>
              </div>
            )}

            {activeTab === "previous" && (
              <div className="grid md:grid-cols-3 gap-4">
                {previousStreams.map((stream) => (
                  <motion.div
                    key={stream.id}
                    onClick={() => navigate("/player")}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: (stream.id + 1) * 0.1 }}
                    className="relative group p-4 overflow-hidden rounded-md shadow-lg bg-gray-900 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
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
            )}

            {activeTab === "settings" && (
              <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-red-500">
                  Profile Settings
                </h3>
                <p className="text-gray-300 mb-2">
                  Update your profile, privacy, and stream settings here.
                </p>
                <button className="btn btn-error">Edit Profile</button>
              </div>
            )}
          </div>
        </div>

        {/* Go Live Modal */}
        {showGoLiveModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-black/90 p-6 rounded-lg shadow-sm shadow-red-500 w-11/12 md:w-1/3"
            >
              <h3 className="text-xl font-semibold mb-4 text-red-500">
                Enter Live Stream Details
              </h3>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Stream Title"
                  className="input input-bordered w-full bg-gray-900 border-gray-900 text-white placeholder-gray-400"
                />
                <textarea
                  placeholder="Description"
                  className="textarea textarea-bordered w-full bg-gray-900 border-gray-900 text-white placeholder-gray-400"
                ></textarea>
                <input
                  type="text"
                  placeholder="Tags (comma separated)"
                  className="input input-bordered w-full bg-gray-900 border-gray-900 text-white placeholder-gray-400"
                />
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    className="btn btn-outline text-gray-300 border-gray-500"
                    onClick={() => setShowGoLiveModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => navigate("/player")}
                    className="btn btn-error"
                  >
                    Start Live
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
