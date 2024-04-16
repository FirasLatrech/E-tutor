import { SearchIcon } from 'lucide-react';
import { useUsersQuery } from 'modules/shared/data/queries/users.query';
import useDebounce from 'modules/shared/hooks/useDebounce';
import React, { useEffect, useState } from 'react';
import { Search } from 'react-router';
import UserCard from './UserCard';
import { useCourseSections } from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';
import useAuthStore from 'modules/shared/store/useAuthStore';

interface SearchUserPropsType {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  isLoading: boolean;
}
function SearchUser({
  searchValue,
  setSearchValue,
  data,
  isLoading,
}: SearchUserPropsType) {
  const [isTyping, setTyping] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');
  const { Instructors } = useCourseSections();
  const { user: User } = useAuthStore((state) => state);
  const isAllSelected =
    (
      data?.data
        ?.map((user: any, index: number) => {
          if (
            (
              Instructors?.filter((instructor) => user?.id == instructor?.id) ||
              []
            )?.length > 0
          ) {
            return user;
          }
        })
        .filter((user: any) => user !== undefined) || []
    )?.length == data?.data?.length;

  useDebounce(() => {
    setSearchValue(inputValue);
  }, 500);
  console.log(
    data?.data?.length > 0 && !isAllSelected,
    isAllSelected,
    Instructors,
    data?.data,
    data?.data
      ?.map((user: any, index: number) => {
        if (
          (
            Instructors?.filter((instructor) => user?.id == instructor?.id) ||
            []
          )?.length > 0
        ) {
          return user;
        }
      })
      .filter((user: any) => user !== undefined),
    'data?.data?.length > 0 && !isAllSelected '
  );
  return (
    <div className="w-[38rem] relative ">
      <SearchIcon className="absolute top-[25%] left-[0.8rem]" />
      <input
        className={`w-full border border-gray-100 pl-[3rem] bg-gray-white py-[0.7rem] px-3  placeholder-gray-500 focus:outline-none  outline-none hover:border-1 text-[1rem] text-gray-700 font-light`}
        placeholder={'Search by username'}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setTyping(true)}
        onBlur={() => setTimeout(() => setTyping(false), 200)}
      />
      {isTyping && (
        <div className="w-full h-full z-10 gap-1 shadow-md  overflow-auto max-h-[13rem] bg-white border top-[3.3rem]  border-gray-100 absolute min-h-[12rem]">
          {isLoading ? (
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-gray-500 text-sl leading-5">Loading...</p>
            </div>
          ) : data?.data?.length > 0 && !isAllSelected ? (
            data?.data?.map((user: any, index: number) => {
              console.log(User?.id, Instructors);
              if (Instructors?.some((instructor) => user?.id == instructor?.id))
                return;
              return (
                <UserCard
                  key={index}
                  id={user?.id}
                  username={user?.username}
                  job="UI/UX Designer"
                  pictureLink={user?.avatarUrl}
                />
              );
            })
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-gray-500 text-sl leading-5">No user found !</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchUser;
