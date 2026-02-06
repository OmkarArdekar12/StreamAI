import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StreamCard = ({ stream }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate("/player")}
      className="relative p-4 rounded-md bg-gray-900 hover:-translate-y-2 transition cursor-pointer"
    >
      <video
        src={stream.video}
        className="w-full h-56 object-cover"
        autoPlay
        muted
        loop
      />

      <div className="absolute bottom-4 left-4">
        <h3 className="text-xl font-bold">{stream.title}</h3>
        <p className="text-gray-400 text-sm">{stream.viewers}</p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/70 transition">
        <button className="btn btn-sm bg-red-500 border-none">
          <FaPlayCircle className="mr-2" /> Watch
        </button>
      </div>
    </motion.div>
  );
};

export default StreamCard;
