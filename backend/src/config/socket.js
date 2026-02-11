import { Server } from "socket.io";
import prisma from "./prismaClient.js";  // Import Prisma client

const setupSocketIO = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
    },
  });

  io.on("connection", (socket) => {

    // Join a specific stream's chat room
    socket.on("join_stream", (stream_id) => {
      socket.join(stream_id);

      const room = io.sockets.adapter.rooms.get(stream_id);
      const viewerCount = room ? room.size : 0;

      io.to(stream_id).emit("viewer_count", viewerCount);
    });


    // Send a message to the stream's chat room
    socket.on("send_message", async ({ stream_id, user_id, message, username }) => {
      const chatMessage = {
        stream_id,
        user_id,
        username,
        message,
        sent_at: new Date(),
      };

      // Save the chat message to the database
      try {
        const savedMessage = await saveMessageToDB(chatMessage);
        console.log("Message saved:", savedMessage);

        // Broadcast the message to everyone in the chat room
        io.to(stream_id).emit("new_message", savedMessage);
      } catch (error) {
        console.error("Error saving message:", error);
      }
    });

    // Handle user disconnect
    socket.on("disconnecting", () => {
      socket.rooms.forEach((room) => {
        if (room !== socket.id) {
          const roomData = io.sockets.adapter.rooms.get(room);
          const count = roomData ? roomData.size - 1 : 0;
          io.to(room).emit("viewer_count", count);
        }
      });
    });

  });
};

// Function to save messages to the database
const saveMessageToDB = async (messageData) => {
  try {
    console.log("Saving message to DB:", messageData); // Debugging log
    const savedMessage = await prisma.chat.create({
      data: messageData,
    });
    return savedMessage;
  } catch (error) {
    console.error("Error saving message:", error);
    socket.emit("message_error", "Message failed to send");
  }
};

export default setupSocketIO;
