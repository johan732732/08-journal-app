export const fileUpload = async (file) => {
  // if (!file) throw new Error('No file provided');
  if (!file) return null; // Return null if no file is provided

  const cloudinaryURL = 'https://api.cloudinary.com/v1_1/dep6ir1mi/upload';

  const formData = new FormData();
  formData.append('upload_preset', 'journal-app');
  formData.append('file', file);

  try {
    const response = await fetch(cloudinaryURL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Image upload failed');

    const cloudResponse = await response.json();
    return cloudResponse.secure_url;
  } catch (error) {
    console.error(error);
    // throw new Error(error.message);
    return null; // Return null if an error occurs
  }
};
