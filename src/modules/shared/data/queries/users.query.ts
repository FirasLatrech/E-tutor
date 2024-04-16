import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/user.service";
import { QueryType } from "modules/shared/types/query";
import { UploadFile } from "../api/File.service";

export const useUsersQuery = (Query:QueryType) =>
  useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await getAllUsers(Query);
      return res;
    },
  });

