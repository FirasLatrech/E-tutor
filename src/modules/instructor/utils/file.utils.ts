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

export function isValidImage(file:File) {
  // const supportedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
  // const maxAllowedWidth = 1200;
  // const maxAllowedHeight = 800;
  // const aspectRatio = 12 / 8; 

  // if (!file || !supportedFormats.includes(file.type)) {
  //   return false;
  // }
  // // Create an image element to get the image dimensions
  // const img = new Image();
  // img.src = URL.createObjectURL(file);

  // return new Promise((resolve, reject) => {
  //   img.onload = function () {
  //     // Check if image dimensions meet the guidelines
  //     if (img.width === maxAllowedWidth && img.height === maxAllowedHeight) {
  //       resolve(true);
  //     } else {
  //       reject(false);
  //     }
  //   };

  //   // Handle any errors while loading the image
  //   img.onerror = function () {
  //     reject(false);
  //   };
  // });
  return true;
}