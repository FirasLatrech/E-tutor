import { SearchIcon } from 'lucide-react';
import { useUsersQuery } from 'modules/shared/data/queries/users.query';
import useDebounce from 'modules/shared/hooks/useDebounce';
import React, { useEffect, useState } from 'react';
import { Search } from 'react-router';
import UserCard from './UserCard';
import { useCourseSections } from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';

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

  useDebounce(() => {
    setSearchValue(inputValue);
  }, 500);

  return (
    <div className="w-[38rem] relative ">
      <SearchIcon className="absolute top-[25%] left-[0.8rem]" />
      <input
        className={`w-full border border-gray-100 pl-[3rem] bg-gray-white py-[0.7rem] px-3  placeholder-gray-500 focus:outline-none  outline-none hover:border-1 text-[1rem] text-gray-700 font-light`}
        placeholder={'Search by username'}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setTyping(true)}
        onBlur={() => setTyping(false)}
      />
      {isTyping && (
        <div className="w-full z-10 gap-1 bg-white border top-[3.3rem]  border-gray-100 absolute min-h-[12rem]">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.data?.map((user: any, index: number) => {
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
          )}
        </div>
      )}
    </div>
  );
}

export default SearchUser;
