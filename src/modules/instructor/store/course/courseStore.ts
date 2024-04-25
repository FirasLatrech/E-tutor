import { create } from 'zustand';
import { logger } from 'modules/shared/store/logger';
import { getMyCourses } from 'modules/instructor/data/api/course/Course.service';

interface CourseState {
  data: any;
  isLoading: boolean;
  query: QueryOptionsType;
  error: string | null;
}

export interface QueryOptionsType {
  page?: number;
  limit?: number;
  filters?: string;
  sort?: OrderOptionsType[] | string;
}

interface OrderOptionsType {
  orderBy: string;
  order: string;
}

export const queryOptions: QueryOptionsType = {
  page: 1,
  limit: 8,
  filters: '',
  sort: JSON.stringify([
    {
      orderBy: 'createdAt',
      order: 'DESC',
    },
  ]),
};

export interface CourseStore extends CourseState {
  setData: (queryOptions: QueryOptionsType) => void;
}

const initialState: Pick<CourseStore, keyof CourseState> = {
  data: [''],
  isLoading: false,
  query: queryOptions,
  error: null,
};

const useCourseStore = create<CourseStore>()(
  logger<CourseStore>(
    (set) => ({
      ...initialState,
      setData: async (queryOptions: QueryOptionsType) => {
        set(() => ({ isLoading: true }));
        const mergedQuery = {
          ...(useCourseStore.getState().query || {}),
          ...queryOptions,
        };
        set(() => ({ query: mergedQuery }));
        const data = await getMyCourses(mergedQuery);
        set(() => ({ isLoading: false }));
        set(() => ({ data }));
      },
    }),
    'CourseStore'
  )
);

export default useCourseStore;
