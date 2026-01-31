import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import LiveTranscript from "./LiveTranscript";
import LiveTimestamp from "./LiveTimestamp";
import Summary from "./Summary";
import Analysis from "./Analysis";

const tabs = [
  "Comments",
  "Live Transcript",
  "Live Timestamps",
  "Summary",
  "Analysis",
];

const CommentsSection = () => {
  const [activeTab, setActiveTab] = useState("Comments");

  const [comments, setComments] = useState([
    "Amazing platform",
    "Very high qualit live stream",
    "This is amazing!",
    "Loving the content!",
  ]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="mt-3 p-1 rounded-lg shadow">
      <div className="flex gap-4 border-b-2 border-red-900 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 font-medium cursor-pointer ${
              activeTab === tab ? "text-red-500" : "text-gray-500"
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
            <div className="mt-4 mb-4 flex flex-col gap-2 max-h-100 overflow-y-auto">
              {comments.map((c, index) => (
                <div key={index} className="p-2 bg-black-100 rounded shadow-sm">
                  <Comment text={c} />
                </div>
              ))}
            </div>
            <CommentInput addComment={addComment} />
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

export default CommentsSection;
