import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ExploreLiveStreamPage = () => {
  const navigate = useNavigate();

  // Sample live stream data
  const liveStreams = [
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
      <section className="py-16 px-6 md:px-16 bg-black/80 min-h-screen pb-20">
        <h2 className="text-3xl font-bold mb-10 text-red-500">
          All Live Streams
        </h2>
        <div className="flex flex-col gap-10">
          {liveStreams.map((stream) => (
            <div
              key={stream.id}
              onClick={() => navigate("/player")}
              className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-gray-900"
            >
              <video
                src={stream.video}
                className="w-full h-64 object-cover group-hover:opacity-80 transition duration-300"
                autoPlay
                muted
                loop
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-2xl font-bold mb-1">{stream.title}</h3>
                <p className="text-sm text-gray-400">{stream.viewers}</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/70 flex justify-center items-center">
                <button className="btn btn-md bg-red-500 border-none hover:bg-red-600 rounded-full shadow-md">
                  <FaPlayCircle className="mr-2" /> Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ExploreLiveStreamPage;
