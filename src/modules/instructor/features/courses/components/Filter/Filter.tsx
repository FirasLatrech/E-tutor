import { useAllCategory } from 'modules/home/data/queries/home.query';
import DropDownGeneric from './_components/DropDown/DropDown';
import React from 'react';
import useCourseStore from 'modules/instructor/store/course/courseStore';

function Filter() {
  const { data: category_data, isFetching: category_loading } =
    useAllCategory();
  const { data, setData, isLoading } = useCourseStore((state) => state);

  return (
    <>
      <DropDownGeneric
        label="Sort by:"
        text="latest"
        Options={[
          {
            name: 'latest',
            action: () =>
              setData({
                sort: JSON.stringify([
                  {
                    orderBy: 'createdAt',
                    order: 'DESC',
                  },
                ]),
              }),
          },
          {
            name: 'oldest',
            action: () =>
              setData({
                sort: JSON.stringify([
                  {
                    orderBy: 'createdAt',
                    order: 'ASC',
                  },
                ]),
              }),
          },
          {
            name: 'Description',
            action: () => {},
          },
          {
            name: 'Lecture Notes',
            action: () => {},
          },
        ]}
      />
      <DropDownGeneric
        label="Category"
        text="All Category"
        Options={[
          {
            name: 'All Category',
            action: () =>
              setData({
                filters: '{}',
              }),
          },
          ...(category_data && !category_loading
            ? category_data.map((item: any) => ({
                name: item?.name,
                action: () =>
                  setData({
                    filters: JSON.stringify({ category: { id: item?.id } }),
                  }),
              }))
            : []),
          ,
        ]}
      />
      <DropDownGeneric
        label="Rating"
        text="4 Star & Up"
        Options={[
          {
            name: 'Video',
            action: () => {},
          },
          {
            name: 'Attach File',
            action: () => {},
          },
          {
            name: 'Captions',
            action: () => {},
          },
          {
            name: 'Description',
            action: () => {},
          },
          {
            name: 'Lecture Notes',
            action: () => {},
          },
        ]}
      />
    </>
  );
}

export default Filter;
