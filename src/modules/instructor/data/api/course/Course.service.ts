import { api } from 'modules/shared/lib/api';

export const createCourse = async (course: Course) => {
  try {
    const res = await api.post('/courses', course);
    if (res.status !== 201) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res?.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const updateCourse = async (
  course: any,
  courseId: string | undefined
) => {
  try {
    const res = await api.patch(`/courses/${courseId}`, course);
    if (res.status !== 201) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res?.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
