import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "streamai/profile_pictures",

    allowed_formats: ["jpg", "png", "jpeg", "webp"],

    transformation: [
      {
        width: 300,
        height: 300,
        crop: "fill",
        gravity: "face",
        quality: "auto",
        fetch_format: "auto",
      },
    ],
  }),
});

const upload = multer({ storage });

export default upload;
