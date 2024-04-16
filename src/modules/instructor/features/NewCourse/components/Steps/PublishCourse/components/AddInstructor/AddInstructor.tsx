import SearchIcon from 'modules/instructor/assets/icons/NavBar/SearchIcon';
import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import SearchUser from './SearchUser';
import { useUsersQuery } from 'modules/shared/data/queries/users.query';
import { useCourseSections } from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';

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
    <div className="flex flex-col gap-4 w-full ">
      <h1 className="capitalize text-gray-900 text-lg leading-5">
        {`Add Instructor (${Instructors?.length || 0})`}
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
            <div className="w-[30%]">
              <UserCard
                key={index}
                id={user?.id}
                username={user?.username}
                job="UI/UX Designer"
                pictureLink={user?.avatarUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddInstructor;
