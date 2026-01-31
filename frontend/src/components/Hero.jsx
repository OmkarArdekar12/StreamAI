import React from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle, FaFire, FaTv } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] flex flex-col justify-center items-start px-8 md:px-20 bg-gradient-to-b from-black/70 to-black/90">
      <img
        src="/overview/2.gif"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-2xl md:text-6xl font-extrabold mb-6 leading-tight">
          Experience <br />
          <span className="text-red-500">Smart Streaming with</span>
          <div className="relative rounded-xl flex items-center text-5xl md:text-7xl transition-colors">
            <div className="z-40 font-bold">
              Stream<span className="text-red-500">AI</span>
            </div>
          </div>
        </h1>
        <p className="text-gray-300 text-sm md:text-lg mb-8">
          Experience next-generation smart streaming powered by AI — real-time
          subtitles, real-time content filtering, real-time comments filtering,
          intelligent filters, stats and more.
        </p>
        <Link
          to="/player"
          className=" hidden w-1/2 md:w-full bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full md:text-lg font-semibold sm:flex flex-wrap items-center gap-2 shadow-lg hover:shadow-red-500/40 transition-all"
        >
          <FaPlayCircle /> <span>Start Watching</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
