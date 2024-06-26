import { useMutation, useQuery } from '@tanstack/react-query';
import { type QueryType } from 'modules/shared/types/query';
import { UploadFile } from '../api/File.service';
import { getAllUsers } from '../api/user.service';

export const useUsersQuery = (Query: QueryType) =>
  useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await getAllUsers(Query);
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
