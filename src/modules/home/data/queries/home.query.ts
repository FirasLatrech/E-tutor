import { useMutation, useQuery } from '@tanstack/react-query';
import { RegisterBody, type LoginBody } from 'modules/auth/types/auth';

import { useCallback } from 'react';
import {
  getAllCategory,
  getBestCourse,
  getBestSellingCourse,
  getRecentlyCourses,
  getTopInstructorOfTheMonth,
} from '../api/home.service';
import BestSellingCourses from 'modules/home/components/bestSellingCourses';

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
