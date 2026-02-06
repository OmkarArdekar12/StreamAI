const ProfileHeader = ({ user }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-950 p-6 rounded-lg border-l-4 border-red-600">
      <img
        src={user.profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-full border-2 border-red-600"
      />

      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-red-500">{user.username}</h2>

        <div className="flex gap-6 text-gray-300 mt-2">
          <div><b>{user.subscribers}</b> Subscribers</div>
          <div><b>{user.totalViews}</b> Views</div>
          <div><b>{user.totalStreams}</b> Streams</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
