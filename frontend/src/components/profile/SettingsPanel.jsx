const SettingsPanel = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h3 className="text-red-500 text-lg mb-4">Profile Settings</h3>
      <p className="text-gray-300 mb-3">
        Update your profile and stream settings.
      </p>
      <button className="btn btn-error">Edit Profile</button>
    </div>
  );
};

export default SettingsPanel;
