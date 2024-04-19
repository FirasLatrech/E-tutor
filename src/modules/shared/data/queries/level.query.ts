import { useQuery } from "@tanstack/react-query";
import { QueryType } from "modules/shared/types/query";
import { getAllLevels } from "../api/level.service";

export const useLevelsQuery = () =>
  useQuery({
    queryKey: ['Level'],
    queryFn: async () => {
      const res = await getAllLevels();
      return res;
    },
  });
