import { QueryOptionsType } from "modules/instructor/store/course/courseStore";
import { api } from "modules/shared/lib/api";

export const getNotifications = async (queryOptions: QueryOptionsType) => {
  try {
    const res = await api.get(`/Notification`, {
      params: {
        ...queryOptions,
      },
    });
    return res?.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
