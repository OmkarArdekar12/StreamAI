const GoLivePanel = ({ onGoLiveClick }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg text-center">
      <h3 className="text-xl text-red-500">Start your live stream</h3>
      <p className="text-gray-300 mb-4">Click below to go live</p>

      <button className="btn btn-error" onClick={onGoLiveClick}>
        Go Live
      </button>
    </div>
  );
};

export default GoLivePanel;
