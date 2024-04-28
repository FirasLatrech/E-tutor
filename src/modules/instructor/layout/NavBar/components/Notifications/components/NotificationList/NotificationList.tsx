import CreateCourseLoader from 'modules/instructor/assets/icons/CreateCourse/Loader';
import useNotificationStore from 'modules/instructor/store/notifications/NotificationStore';
import { DropdownMenuContent } from 'modules/shared/components/ui/dropdown-menu';
import React, { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Notification from '../Notification/Notification';

function NotificationList() {
  const { setData, isLoading, data, setNextPageData } = useNotificationStore(
    (state) => state
  );

  useEffect(() => {
    setData({ page: 1 });
  }, []);

  const fetchNextPage = () => {
    setNextPageData({});
  };

  return (
    <DropdownMenuContent
      id="scrollableDiv"
      className="w-[30rem] -right-[1.5rem] absolute no-scrollbar bg-gray-50 h-[25rem] overflow-auto"
    >
      {isLoading && !data?.data ? (
        <CreateCourseLoader />
      ) : (
        <InfiniteScroll
          dataLength={data?.data?.length || 0}
          next={fetchNextPage}
          hasMore={data?.hasNextPage}
          loader={<CreateCourseLoader />}
          pullDownToRefresh
          refreshFunction={() => console.log('object')}
          pullDownToRefreshContent={<h3>Pull down to refresh</h3>}
          releaseToRefreshContent={<h3>Release to refresh</h3>}
          scrollableTarget="scrollableDiv"
          style={{ display: 'flex', flexDirection: 'column' }}
          className="no-scrollbar"
        >
          {data?.data?.map((notification: any, index: number) => (
            <div key={notification.id} className="py-1">
              <Notification {...notification} key={index} />
            </div>
          ))}
        </InfiniteScroll>
      )}
    </DropdownMenuContent>
  );
}

export default NotificationList;
