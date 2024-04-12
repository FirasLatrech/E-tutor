import { api } from "modules/shared/lib/api";

export const UploadFile = async(File:FormData)=>{
        try {
          const res = await api.get('/upload');
          if (res.status !== 200) {
            throw new Error(`Unexpected status code: ${res.status}`);
          }
          return res.data;
        } catch (error: any) {
          return error?.response?.data;
        }
          
}   