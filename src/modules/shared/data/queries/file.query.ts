import { useMutation } from '@tanstack/react-query';
import { UploadFile, UploadVideo } from '../api/File.service';

export const useUploadFileQuery = () =>
  useMutation({
    mutationFn: async (File: File) => {
      const res = await UploadFile(File);
      return res;
    },
  });

export const useUploadVideoQuery = () =>
  useMutation({
    mutationFn: async (File: File) => {
      const res = await UploadVideo(File);
      return res;
    },
  });
