import axios from 'axios';
import { api } from 'modules/shared/lib/api';

export const UploadFile = async (File: File) => {
  const formdata = new FormData();
  formdata.append('file', File);
  try {
    const res = await api.post('/files/upload', formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (res.status !== 201) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const UploadVideo = async (File: File) => {
  const formdata = new FormData();
  formdata.append('file', File);
  try {
    const res = await api.post('/files/video/upload', formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (res.status !== 201) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
