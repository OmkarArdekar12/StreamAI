import { motion } from "framer-motion";

const GoLiveModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-black p-6 rounded-lg w-11/12 md:w-1/3"
      >
        <h3 className="text-red-500 text-xl mb-4">Stream Details</h3>

        <input className="input w-full mb-3 bg-gray-900" placeholder="Title" />
        <textarea className="textarea w-full mb-3 bg-gray-900" placeholder="Description" />
        <input className="input w-full bg-gray-900" placeholder="Tags" />

        <div className="flex justify-end gap-2 mt-4">
          <button className="btn btn-outline" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-error">Start Live</button>
        </div>
      </motion.div>
    </div>
  );
};

export default GoLiveModal;
