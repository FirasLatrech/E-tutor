//@ts-ignore
import { getVideoDurationInSeconds } from 'video-duration';

export const getVideoDuration = async (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const blob = new Blob([e?.target?.result || ''], { type: file.type });
      try {
        const duration = await getVideoDurationInSeconds(blob);
        console.log(duration);
        resolve(duration);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsArrayBuffer(file);
  });
};
