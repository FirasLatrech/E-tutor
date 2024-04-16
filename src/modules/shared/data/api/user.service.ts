import { api } from 'modules/shared/lib/api';
import { type QueryType } from 'modules/shared/types/query';

export const getAllUsers = async ({
  page = 1,
  limit = 10,
  search = '',
  filters = '',
  sort,
}: QueryType) => {
  try {
    const res = await api.get('/users', {
      params: {
        page,
        limit,
        search,
        filters,
        sort,
      },
    });
    if (res.status !== 200) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
