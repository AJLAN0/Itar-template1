export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "itar-temp"); // ✅ الاسم يجب أن يكون صحيح 100%

  const response = await fetch("https://api.cloudinary.com/v1_1/dzc6gle9t/image/upload", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!data.secure_url) {
    console.error("Image upload failed:", data);
    return ""; // ترجع قيمة فاضية وتمنع التخزين الخاطئ
  }

  return data.secure_url;
};
