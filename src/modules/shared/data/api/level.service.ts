import { api } from 'modules/shared/lib/api';
import { QueryType } from 'modules/shared/types/query';

export async function getAllLevels() {
  try {
    const res = await api.get('/Level');
    if (res.status !== 200) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res?.data?.data;
  } catch (error: any) {
    return error?.response?.data;
  }
}
