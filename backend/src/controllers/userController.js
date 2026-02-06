import prisma from "../config/prismaClient.js";

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await prisma.user.findUnique({
      where: { user_id: userId },
      include: {
      streams: {
        select: {
          viewer_count: true,
        },
      },
      followers: true,
    },
    });
    console.log("Fetched user profile: ", user);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    const safeUser = {
      user_id: user.user_id,
      username: user.username,
      email: user.email,
      profilePic: "https://ui-avatars.com/api/?name=" + user.username + "&background=random",
      subscribers: user.followers.length,
      totalViews: user.streams.reduce((sum, stream) => sum + stream.viewer_count, 0),
      totalStreams: user.streams.length
    };
    res.status(200).json(safeUser);
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const { username, email } = req.body;
    const updatedUser = await prisma.user.update({
      where: { user_id: userId },
      data: { username, email },
    });
    const safeUser = {
      user_id: updatedUser.user_id,
      username: updatedUser.username,
      email: updatedUser.email,
    };
    res.status(200).json(safeUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
};