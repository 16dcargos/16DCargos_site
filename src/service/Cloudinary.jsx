
export const uploadToCloudinary = async (file) => {
    // console.log(file)
    // const formData = new FormData();
    // formData.append('file', file);
    // formData.append('upload_preset', '16dcargos'); // Replace with your Cloudinary upload preset
    // // const cloud_name = import.meta.env.CLOUD_NAME

    // try {
    //     const response = await axios.post(
    //         `https://api.cloudinary.com/v1_1/cjubsd1h/upload`,// Replace with your Cloudinary cloud name
    //         formData
    //     );
    //     return response.data.secure_url;
    // } catch (error) {
    //     console.error('Error uploading file:', error);
    //     return null;
    // }

    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "16dcargos");

    const cloudinaryResponse = await fetch(
        "https://api.cloudinary.com/v1_1/dmh7fwdzf/upload",
        {
            method: "POST",
            body: uploadData,
        }
    );

    if (!cloudinaryResponse.ok) {
        throw new Error(
            `Failed to upload file: ${cloudinaryResponse.statusText}`
        );
    }

    return await cloudinaryResponse.json();

};
