import React, { useEffect, useState } from 'react';
import { Search } from 'react-router';
import { SearchIcon } from 'lucide-react';
import { useCourseSections } from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';
import useAuthStore from 'modules/shared/store/useAuthStore';
import UserCard from './UserCard';
import useDebounce from 'modules/shared/hooks/useDebounce';

interface SearchUserPropsType {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  data: { data: User[] };
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
        ?.map((user: User, index: number) => {
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

 
  return (
    <div className="w-[38rem] max-lg:w-full relative ">
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
            data?.data?.map((user: User, index: number) => {
              console.log(User?.id, Instructors);
              if (Instructors?.some((instructor) => user?.id == instructor?.id))
                return;
              return (
                <UserCard
                  key={index}
                  id={user?.id}
                  username={user?.username}
                  job="UI/UX Designer"
                  pictureLink={null}
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
