import { useMutation, useQuery } from '@tanstack/react-query';
import { type QueryType } from 'modules/shared/types/query';
import { UploadFile } from '../api/File.service';
import { getAllInstructors } from '../api/user.service';

export const useInstructorsQuery = (Query: QueryType) =>
  useQuery({
    queryKey: ['Instructors'],
    queryFn: async () => {
      const res = await getAllInstructors(Query);
      return res;
    },
  });

export const useUploadFileQuery = (File: File) =>
  useMutation({
    mutationFn: async () => {
      const res = await UploadFile(File);
      return res;
    },
  });
