import { v2 as cloudinary } from "cloudinary";

cloudinary.config(); // auto reads CLOUDINARY_URL

export default cloudinary;
