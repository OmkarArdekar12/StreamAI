import { motion } from "framer-motion";
import { FaVideo, FaRegListAlt, FaCog } from "react-icons/fa";

const tabs = [
  { id: "goLive", label: "Go Live", icon: <FaVideo /> },
  { id: "previous", label: "Previous Streams", icon: <FaRegListAlt /> },
  { id: "settings", label: "Settings", icon: <FaCog /> },
];

const ProfileTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mt-6 flex gap-4 border-b border-red-600 pb-2 align-middle">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          whileHover={{ scale: 1.05 }}
          className={`px-4 py-2 rounded-md flex gap-2 align-middle ${
            activeTab === tab.id
              ? "bg-red-600"
              : "bg-gray-900 hover:bg-gray-800"
          }`}
        >
          <span className="align-middle">{tab.icon}</span>
          <span className="align-middle">{tab.label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default ProfileTabs;
