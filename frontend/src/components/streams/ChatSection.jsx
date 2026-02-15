import React, { useState, useEffect, useRef, use } from "react";
import { io } from "socket.io-client";
import ChatInput from "./ChatInput";
import LiveTranscript from "./LiveTranscript";
import LiveTimestamp from "./LiveTimestamp";
import Summary from "./Summary";
import Analysis from "./Analysis";
import { axiosInstance } from "../../lib/axios";
import { motion } from "framer-motion";


const socket = io(import.meta.env.VITE_SOCKET_URL, {
  withCredentials: true,
});

const tabs = [
  "Comments",
  "Live Transcript",
  "Live Timestamps",
  "Summary",
  "Analysis",
];

const ChatSection = ({ streamId, userId, username }) => {
  const [activeTab, setActiveTab] = useState("Comments");
  const [chats, setChats] = useState([]);

  const [viewerCount, setViewerCount] = useState(0);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!streamId) return;

    console.log("Loading chats for stream:", streamId);
    const loadChats = async () => {
      const res = await axiosInstance.get(`/chat/stream/${streamId}`);
      setChats(res.data);
    };

    loadChats();
  }, [streamId]);
  // Join stream + listeners
  useEffect(() => {
    if (!streamId) return;

    // Join correct room (backend expects only stream_id)
    socket.emit("join_stream", streamId);

    // Receive new message
    socket.on("new_message", (data) => {
      setChats((prev) => [...prev, data]);
    });

    // Receive viewer count
    socket.on("viewer_count", (count) => {
      setViewerCount(count);
    });

    return () => {
      socket.off("new_message");
      socket.off("viewer_count");
    };
  }, [streamId]);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  const addChat = (message) => {
    if (!message.trim()) return;

    socket.emit("send_message", {
      stream_id: streamId,
      user_id: userId,
      username: username,
      message,
    });
  };


  const getUserColor = (username) => {
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }

    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 70%, 60%)`;
  };


  return (
    <div className="mt-3 p-3 rounded-lg shadow">

      {/* Tabs */}
      <div className="flex gap-4 border-b-2 border-red-900 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 font-medium cursor-pointer ${activeTab === tab
              ? "text-red-500 border-b-2 border-red-500"
              : "text-gray-500"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Comments" && (
          <div>

            {/* Viewer Count */}
            <div className="mb-2 text-sm text-gray-600">
              👀 {viewerCount} watching
            </div>

            {/* Messages */}
            <div className="mt-2 flex flex-col gap-2 max-h-96 overflow-y-auto">
              {chats.map((c) => (
                <div key={c.id} className="rounded shadow-sm">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black/20 text-white rounded-lg shadow-md max-w-xl">
                    <p className="text-gray-200">
                      <span
                        style={{ color: getUserColor(c.username) }}
                        className="font-semibold"
                      >
                        {c.username}:
                      </span>{" "}
                      {c.message}
                    </p>

                  </motion.div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <ChatInput addChat={addChat} />
          </div>
        )}

        {activeTab === "Live Transcript" && (
          <div className="p-4 text-gray-700">
            <LiveTranscript />
          </div>
        )}

        {activeTab === "Live Timestamps" && (
          <div className="p-4 text-gray-700">
            <LiveTimestamp />
          </div>
        )}

        {activeTab === "Summary" && (
          <div className="p-4 text-gray-700">
            <Summary />
          </div>
        )}

        {activeTab === "Analysis" && (
          <div className="p-4 text-gray-700">
            <Analysis />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatSection;
