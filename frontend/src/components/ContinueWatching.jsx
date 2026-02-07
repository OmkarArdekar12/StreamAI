import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRunning, FaTv } from "react-icons/fa";
import { VscVmRunning } from "react-icons/vsc";

const ContinueWatching = () => {
  const navigate = useNavigate();

  const continueWatching = [
    { id: 1, title: "Basketball Stream", video: "/preview/4.mp4" },
    { id: 2, title: "Gaming Stream", video: "/preview/6.mp4" },
    { id: 3, title: "Football Stream", video: "/preview/8.mp4" },
  ];

  return (
    <section className="py-14 px-6 md:px-12 lg:px-20 bg-[#0E0E10]">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-white">
        <FaTv className="text-[#9147FF]" />
        Continue Watching
      </h2>

      {/* Scroll Container */}
      <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
        {continueWatching.map((stream) => (
          <div
            key={stream.id}
            onClick={() => navigate("/player")}
            className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px] 
                       h-[200px] md:h-[220px] 
                       relative rounded-xl overflow-hidden 
                       bg-[#18181B] 
                       transition-all duration-500 
                       transform hover:-rotate-1 hover:scale-105
                       group cursor-pointer"
          >
            {/* Video */}
            <video
              src={stream.video}
              className="w-full h-full object-cover 
                         group-hover:opacity-40 transition duration-500"
              autoPlay
              muted
              loop
            />

            {/* Right + Bottom Border Effect */}
            <div
              className="absolute inset-0 border-r-4 border-b-4 border-transparent 
                            group-hover:border-[#9147FF] 
                            transition-all duration-500 pointer-events-none"
            ></div>

            {/* Hover Overlay */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center
                bg-black/60 backdrop-blur-sm
                opacity-0 group-hover:opacity-100
                transition-all duration-500"
            >
              <VscVmRunning
                className="text-[#9147FF] text-5xl mb-3 
                        animate-run drop-shadow-[0_0_10px_#9147FF]"
              />

              <p className="text-white text-sm md:text-base font-semibold tracking-wide">
                Jump Back In
              </p>
            </div>

            {/* Bottom Title */}
            <div className="absolute bottom-3 left-4 text-white text-sm font-medium">
              {stream.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContinueWatching;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaPlayCircle, FaTv } from "react-icons/fa";

// const ContinueWatching = () => {
//   const navigate = useNavigate();
//   const continueWatching = [
//     {
//       id: 1,
//       title: "Basketball Stream",
//       video: "/preview/4.mp4", // replace with actual basketball stream
//     },
//     {
//       id: 2,
//       title: "Gaming Stream",
//       video: "/preview/6.mp4", // replace with actual gaming stream
//     },
//     {
//       id: 3,
//       title: "Football Stream",
//       video: "/preview/8.mp4", // replace with actual football stream
//     },
//   ];

//   return (
//     <section className="py-16 px-6 md:px-16 bg-black/70">
//       <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
//         <FaTv className="text-red-500" /> Continue Watching
//       </h2>
//       <div className="flex overflow-x-auto space-x-6 pb-3 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-800">
//         {continueWatching.map((stream) => (
//           <div
//             onClick={() => navigate("/player")}
//             key={stream.id}
//             className="min-w-[300px] relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
//           >
//             <video
//               src={stream.video}
//               className="w-full h-52 object-cover group-hover:opacity-80 transition duration-300"
//               autoPlay
//               muted
//               loop
//             />
//             <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center">
//               <h3 className="text-xl font-bold mb-2">{stream.title}</h3>
//               <button className="btn btn-sm bg-red-500 border-none hover:bg-red-600 rounded-full">
//                 <FaPlayCircle className="mr-2" /> Continue
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ContinueWatching;
