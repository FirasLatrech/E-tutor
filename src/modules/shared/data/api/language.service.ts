import { api } from 'modules/shared/lib/api';

export async function getAlllanguages() {
  try {
    const res = await api.get('/Language', {
      params: {
        orderBy: {
          orderBy: 'createdAt',
          order: 'DESC',
        },
        order: 'asc',
      },
    });
    if (res.status !== 200) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res?.data?.data;
  } catch (error: any) {
    return error?.response?.data;
  }
}
