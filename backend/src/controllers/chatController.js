import prisma from "../config/prismaClient.js";

// Store chat messages to the database
export const saveChatMessage = async (stream_id, user_id, message) => {
  try {
    const newChat = await prisma.chat.create({
      data: {
        stream_id,
        user_id,
        message,
      },
    });
    return newChat;
  } catch (error) {
    console.error("Error saving chat message:", error);
    throw new Error("Error saving message");
  }
};

export const getChatMessagesByStream = async (req, res) => {
  try {
    const { stream_id } = req.params;
    const messages = await prisma.chat.findMany({
      where: {
        stream_id: stream_id,
      },
      orderBy: {
        sent_at: "asc",
      },
    });
    return res.json(messages);
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    throw new Error("Error fetching messages");
  }
};