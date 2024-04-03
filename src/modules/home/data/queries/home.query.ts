import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { RegisterBody, type LoginBody } from 'modules/auth/types/auth';

import { useCallback } from 'react';
import {
  getAllCategory,
  getBestCoursByCategoryId,
  getBestCourse,
  getBestSellingCourse,
  getCategoryById,
  getCoursByCategoryId,
  getRecentlyCourses,
  getTopInstructorOfTheMonth,
} from '../api/home.service';
import BestSellingCourses from 'modules/home/components/bestSellingCourses';

const getFromCache = (key: string) => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData([key]);
};
export const useAllCategory = () =>
  useQuery({
    queryKey: ['AllCategory'],
    queryFn: async () => {
      const res = await getAllCategory();
      return res;
    },
  });

export const useBestSellingCourse = () =>
  useQuery({
    queryKey: ['BestSellingCourse'],
    queryFn: async () => {
      const res = await getBestSellingCourse();
      return res;
    },
  });

export const useBestCourse = () =>
  useQuery({
    queryKey: ['BestCourse'],
    queryFn: async () => {
      const res = await getBestCourse();
      return res;
    },
  });
export const useRecentlyCourses = () =>
  useQuery({
    queryKey: ['RecentlyCourses'],
    queryFn: async () => {
      const res = await getRecentlyCourses();
      return res;
    },
  });

export const useTopInstructorForMonth = () =>
  useQuery({
    queryKey: ['TopInstructorForMonth'],
    queryFn: async () => {
      const res = await getTopInstructorOfTheMonth();
      return res;
    },
  });

export const useGetCourseByCategoryId = (
  category_id: string,
  search: string,
  month: string
) =>
  useQuery({
    queryKey: [`coursesByCategory/${category_id}/${search}`],

    queryFn: async () => {
      // const cache = getFromCache(`coursesByCategory/${category_id}/${search}`); // try to access the data from cache
      // if (cache) return cache; // use the data if in the cache

      const res = await getCoursByCategoryId(category_id, search, month);
      return res;
    },
  });

export const useGetCategoryDetails = (category_id: string) =>
  useQuery({
    queryKey: ['categoryDetails', category_id],
    queryFn: async () => {
      const res = await getCategoryById(category_id);
      return res;
    },
  });

export const useGetBestCourseByCategoryId = (category_id: string) =>
  useQuery({
    queryKey: ['BestcoursesByCategory', category_id],
    queryFn: async () => {
      const res = await getBestCoursByCategoryId(category_id);
      return res;
    },
  });
