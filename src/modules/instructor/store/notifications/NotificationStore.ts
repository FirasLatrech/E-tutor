import { create } from 'zustand';
import { logger } from 'modules/shared/store/logger';
import { getNotifications } from 'modules/instructor/data/api/notifications/Notification.service';

interface NotificationState {
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
  limit: 15,
  filters: '',
  sort: JSON.stringify([
    {
      orderBy: 'createdAt',
      order: 'DESC',
    },
  ]),
};

export interface NotificationStore extends NotificationState {
  setData: (queryOptions: QueryOptionsType) => void;
  setNextPageData: (queryOptions: QueryOptionsType) => void;
}

const initialState: Pick<NotificationStore, keyof NotificationState> = {
  data: [''],
  isLoading: false,
  query: queryOptions,
  error: null,
};

const useNotificationStore = create<NotificationStore>()(
  logger<NotificationStore>(
    (set) => ({
      ...initialState,
      setData: async (queryOptions: QueryOptionsType) => {
        set(() => ({ isLoading: true }));
        const mergedQuery = {
          ...(useNotificationStore.getState().query || {}),
          ...queryOptions,
        };
        set(() => ({ query: mergedQuery }));
        const data = await getNotifications(mergedQuery);
        set(() => ({ isLoading: false }));
        set(() => ({ data }));
      },
      setNextPageData: async (queryOptions: QueryOptionsType) => {
        set(() => ({ isLoading: true }));
        const NextData = await getNotifications({
          ...(useNotificationStore.getState().query || {}),
          ...queryOptions,
          page: (useNotificationStore.getState().query.page || 0) + 1,
        });
        set(() => ({
          query: {
            ...(useNotificationStore.getState().query || {}),
            ...queryOptions,
            page: (useNotificationStore.getState().query.page || 0) + 1,
          },
        }));
        const data = {
          data: [
            ...(useNotificationStore?.getState()?.data?.data || []),
            ...NextData?.data,
          ],
          hasNextPage: NextData?.hasNextPage,
        };
        set(() => ({ isLoading: false }));
        set(() => ({ data }));
      },
    }),
    'NotificationStore'
  )
);

export default useNotificationStore;
