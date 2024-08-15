const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});
async function savetocloudinary(file) {
    try {
        const cloudinaryUploadResponse = await cloudinary.uploader.upload(file);
        const cloudinaryAttachmentUrl = cloudinaryUploadResponse.secure_url;
        return cloudinaryAttachmentUrl;
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw error;
    }
}

module.exports = { savetocloudinary };