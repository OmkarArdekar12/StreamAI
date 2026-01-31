import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import Navbar from "../components/Navbar";
import VideoSection from "../streams/VideoSection";
import SideRecommendations from "../streams/SideRecommendations";
import CommentsSection from "../streams/CommentsSection";
import Footer from "../components/Footer";

const StreamPlayer = () => {
  const videoRef = useRef(null);
  const streamKey = "test";
  const hlsUrl = `http://localhost:8080/hls/${streamKey}.m3u8`;

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => console.error("Autoplay failed:", err));
      });
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
      video.addEventListener("loadedmetadata", () =>
        video.play().catch((err) => console.error("Autoplay failed:", err))
      );
    } else {
      console.error("HLS not supported in this browser.");
    }
  }, [hlsUrl]);

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-black/40 pb-10">
        <div className="flex flex-col lg:flex-row p-4 gap-6">
          <VideoSection videoRef={videoRef} />
          <CommentsSection />
        </div>
        <SideRecommendations />
      </div>
      <Footer />
    </>
  );
};

export default StreamPlayer;

// import { useEffect, useRef } from "react";
// import Hls from "hls.js";

// export default function StreamPlayer({ streamKey = "test" }) {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     const hlsUrl = `/hls/${streamKey}.m3u8`;

//     if (Hls.isSupported()) {
//       const hls = new Hls();
//       hls.loadSource(hlsUrl);
//       hls.attachMedia(video);
//       hls.on(Hls.Events.MANIFEST_PARSED, () => video.play());
//     } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
//       video.src = hlsUrl;
//       video.addEventListener("loadedmetadata", () => video.play());
//     }
//   }, [streamKey]);

//   return (
//     <div className="flex flex-col items-center">
//       <h2 className="text-xl font-bold mb-2">StreamAI - Player</h2>
//       <video
//         ref={videoRef}
//         controls
//         autoPlay
//         playsInline
//         style={{ maxWidth: "100%", width: "720px", height: "auto" }}
//       />
//     </div>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import Hls from "hls.js";

// const StreamPlayer = () => {
//   const videoRef = useRef(null);
//   const streamKey = "test";
//   const hlsUrl = `/hls/${streamKey}.m3u8`;

//   useEffect(() => {
//     const video = videoRef.current;

//     if (Hls.isSupported()) {
//       const hls = new Hls();
//       hls.loadSource(hlsUrl);
//       hls.attachMedia(video);

//       hls.on(Hls.Events.MANIFEST_PARSED, function () {
//         video.play().catch((err) => console.error("Autoplay failed:", err));
//       });

//       return () => {
//         hls.destroy(); // Clean up on unmount
//       };
//     } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
//       video.src = hlsUrl;
//       video.addEventListener("loadedmetadata", () => {
//         video.play().catch((err) => console.error("Autoplay failed:", err));
//       });
//     } else {
//       console.error("HLS not supported in this browser.");
//     }
//   }, [hlsUrl]);

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>StreamAI - Test Player</h2>
//       <p>
//         If the stream is live, the player will automatically play it. Stream key:{" "}
//         <strong>{streamKey}</strong>
//       </p>

//       <video
//         ref={videoRef}
//         controls
//         autoPlay
//         playsInline
//         style={{ maxWidth: "100%", width: "720px", height: "auto" }}
//       ></video>
//     </div>
//   );
// };

// export default StreamPlayer;
