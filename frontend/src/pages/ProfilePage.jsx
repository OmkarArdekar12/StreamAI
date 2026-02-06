import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileTabs from "../components/profile/ProfileTabs";
import GoLivePanel from "../components/profile/GoLivePanel";
import PreviousStreams from "../components/profile/PreviousStreams";
import SettingsPanel from "../components/profile/SettingsPanel";
import GoLiveModal from "../components/profile/GoLiveModal";
import {axiosInstance} from "../lib/axios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [activeTab, setActiveTab] = useState("goLive");
  const [showGoLiveModal, setShowGoLiveModal] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosInstance.get("/users/profile", {
        });
        setUser(res.data);
      } catch (err) {
        console.error("Failed to load user", err);
      } finally {
        setLoadingUser(false);
      }
    };

    fetchUser();
  }, []);


  const previousStreams = [
    { id: 1, title: "Code with AI", viewers: "2.3K watching", video: "/preview/1.webm" },
    { id: 2, title: "AI Fitness Trainer", viewers: "1.1K watching", video: "/preview/2.webm" },
    { id: 3, title: "Movie Talk Live", viewers: "3.5K watching", video: "/preview/3.webm" },
    { id: 4, title: "Gaming Legends", viewers: "5.7K watching", video: "/preview/4.mp4" },
    { id: 5, title: "Art with AI", viewers: "876 watching", video: "/preview/5.mp4" },
    { id: 6, title: "Tech Reviews Live", viewers: "4.2K watching", video: "/preview/6.mp4" },
    { id: 7, title: "Music Jam Session", viewers: "2.9K watching", video: "/preview/7.mp4" },
    { id: 8, title: "Travel Adventures", viewers: "3.1K watching", video: "/preview/8.mp4" },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen text-white p-6 pt-10">
        {loadingUser ? (
          <div className="text-center text-gray-400 mt-10">
            Loading profile...
          </div>
        ) : (
          <ProfileHeader user={user} />
        )}

        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-4">
          {activeTab === "goLive" && (
            <GoLivePanel onGoLiveClick={() => setShowGoLiveModal(true)} />
          )}

          {activeTab === "previous" && (
            <PreviousStreams streams={previousStreams} />
          )}

          {activeTab === "settings" && <SettingsPanel />}
        </div>

        <GoLiveModal
          open={showGoLiveModal}
          onClose={() => setShowGoLiveModal(false)}
        />
      </div>

      <Footer />
    </>
  );
};

export default ProfilePage;
