import axios from 'axios';
export const UploadVideoForStreaming = async (File: FormData) => {
  try {
    const res = await axios.post(
      'http://localhost:3000/api/v1/files/video/upload',
      { file: File },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log(res);
    return res.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
