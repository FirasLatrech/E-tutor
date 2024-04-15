import axios from 'axios';
import { Play } from 'lucide-react';
import { api } from 'modules/shared/lib/api';

export const UploadVideoForStreaming = async (file: File) => {

  try {
    const res = await api.post(
      '/files/video/upload',
      {
        path:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
    );
    console.log(res);
    return res.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
