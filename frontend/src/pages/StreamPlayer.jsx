import React, {useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Hls from "hls.js";
import Navbar from "../components/Navbar";
import VideoSection from "../components/streams/VideoSection";
import SideRecommendations from "../components/streams/SideRecommendations";
import CommentsSection from "../components/streams/CommentsSection";
import Footer from "../components/Footer";
import { axiosInstance } from "../lib/axios";

const StreamPlayer = () => {
  const videoRef = useRef(null);
  const { id } = useParams();
  const [hlsUrl, setHlsUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [streamData, setStreamData] = useState(null);


  useEffect(() => {
    const fetchStream = async () => {
      try {
        const res = await axiosInstance.get(`streams/${id}`);
        const stream = res.data.stream;

        if (!stream.streamer?.stream_keys?.[0]?.stream_key) {
          console.error("Stream key missing");
          return;
        }
        const stream_key = stream.streamer.stream_keys[0].stream_key;
        const url = `http://stream.streamai.in:8080/hls/${stream_key}.m3u8`;
        setHlsUrl(url);
        setStreamData(stream);
      } catch (err) {
        console.error("Failed to load stream", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStream();
  }, [id]);


  useEffect(() => {
    if (!hlsUrl) return;

    const video = videoRef.current;
    if (!video) return;

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

  if (loading) {
    return <div className="text-white p-10">Loading stream...</div>;
  }


  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-black/40 pb-10">
        <div className="flex flex-col lg:flex-row p-4 gap-6">
          <VideoSection videoRef={videoRef} stream={streamData}/>
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