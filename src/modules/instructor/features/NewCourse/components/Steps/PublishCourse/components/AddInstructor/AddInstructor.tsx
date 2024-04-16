import React, { useEffect, useState } from 'react';
import SearchIcon from 'modules/instructor/assets/icons/NavBar/SearchIcon';
import { useCourseSections } from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';
import { useUsersQuery } from 'modules/shared/data/queries/users.query';
import SearchUser from './SearchUser';
import UserCard from './UserCard';

function AddInstructor() {
  const [searchValue, setSearchValue] = useState('');
  const { Instructors } = useCourseSections();
  const { data, refetch, isFetching } = useUsersQuery({
    page: 1,
    limit: 5,
    search: searchValue,
    filters: '',
    sort: '',
  });

  useEffect(() => {
    console.log(searchValue);
    refetch();
  }, [searchValue]);

  return (
    <div className="flex flex-col w-full gap-4 ">
      <h1 className="text-lg leading-5 text-gray-900 capitalize">
        {`Add Instructor (${Instructors?.length ?? 0})`}
      </h1>
      <div className="">
        <SearchUser
          data={data}
          isLoading={isFetching}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="flex min-h-[9rem] items-start flex-wrap gap-4 w-full justify-start">
        {Instructors?.map((user: any, index: number) => {
          return (
            <UserCard
              key={index}
              id={user?.id}
              username={user?.username}
              job="UI/UX Designer"
              pictureLink={user?.avatarUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AddInstructor;
