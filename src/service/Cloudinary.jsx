import axios from "axios";

export const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', '16dcargos'); // Replace with your Cloudinary upload preset
    // const cloud_name = import.meta.env.CLOUD_NAME

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/cjubsd1h/upload`,// Replace with your Cloudinary cloud name
            formData, {
            // withCredentials: true,
            // headers: {
            //     "Content-Type": "multipart/form-data"
            // }
        }
        );
        return response.data.secure_url;
    } catch (error) {
        console.error('Error uploading file:', error);
        return null;
    }
};
