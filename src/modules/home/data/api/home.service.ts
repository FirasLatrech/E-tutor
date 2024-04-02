import axios from 'axios';
import { type LoginBody } from 'modules/auth/types/auth';
import { api } from 'modules/shared/lib/api';

export const getAllCategory = async () => {
  try {
    const res = await api.get('/category');

    if (res.status !== 200) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res?.data?.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
export const getCategoryById = async (categoryId: string) => {
  try {
    const res = await api.get(`/category/${categoryId}`);

    if (res.status !== 200) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res?.data?.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const getBestSellingCourse = async () => {
  try {
    const res = await api.get(
      '/courses?limit=10&sort=[{"orderBy":"enrollmentCount","order":"DESC"}]'
    );
    console.log(res);
    if (res.status !== 200) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res?.data?.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const getBestCourse = async () => {
  try {
    const res = await api.get(
      '/courses?limit=4&sort=[{"orderBy":"enrollmentCount","order":"DESC"}]'
    );

    if (res.status !== 200) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res?.data?.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

// export const getCourseById = async () => {
//   try {
//     const res = await api.get(
//       '/courses?limit=4&sort=[{"orderBy":"enrollmentCount","order":"DESC"}]'
//     );

//     if (res.status !== 200) {
//       throw new Error(`Unexpected status code: ${res.status}`);
//     }
//     return res?.data?.data;
//   } catch (error: any) {
//     return error?.response?.data;
//   }
// };
export const getCoursByCategoryId = async (categoryId: string) => {
  try {
    const res = await api.get(`/category/${categoryId}/courses`);

    if (res.status !== 200) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res?.data?.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const getRecentlyCourses = async () => {
  try {
    const res = await api.get(
      '/courses?limit=4&sort=[{"orderBy":"createdAt","order":"ASC"}]'
    );

    if (res.status !== 200) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res?.data?.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const getTopInstructorOfTheMonth = async () => {
  try {
    const res = await api.get('/users/top-instructors-for-month');

    if (res.status !== 200) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res?.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const getGategoryDetails = async (courseId: number) => {
  try {
    const res = await api.get(`/courses/${courseId}/chapters`);
    if (res.status !== 200) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res?.data?.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
