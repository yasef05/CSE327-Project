import APP from "./app.js";
import cloudinary from cloudinary;

cloudinary.v2.config({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_SECRET,
  apiSecrets: process.env.CLOUDINARY_API_KEY,
})

APP.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
