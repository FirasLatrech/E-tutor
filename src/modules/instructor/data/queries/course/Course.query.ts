import { useMutation } from '@tanstack/react-query';
import { createCourse, updateCourse } from '../../api/course/Course.service';

export const useCreateCourseMutation = () =>
  useMutation({
    mutationFn: async (course: Course) => {
      const res = await createCourse(course);
      return res;
    },
  });
export const useUpdateCourseMutation = () =>
  useMutation({
    mutationFn: async ({
      course,
      courseId,
    }: {
      course: any;
      courseId: string | undefined;
    }) => {
      const res = await updateCourse(course, courseId);
      return res;
    },
  });
