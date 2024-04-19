import { useQuery } from '@tanstack/react-query';
import { QueryType } from 'modules/shared/types/query';
import { getAlllanguages } from '../api/language.service';

export const uselanguagesQuery = () =>
  useQuery({
    queryKey: ['Languages'],
    queryFn: async () => {
      const res = await getAlllanguages();
      return res;
    },
  });
