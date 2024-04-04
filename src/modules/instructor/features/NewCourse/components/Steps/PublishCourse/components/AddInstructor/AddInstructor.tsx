import SearchIcon from 'modules/instructor/assets/icons/NavBar/SearchIcon';
import React, { useState } from 'react';
import UserCard from './UserCard';
import SearchUser from './SearchUser';

function AddInstructor() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="flex flex-col gap-4 w-full ">
      <h1 className="capitalize text-gray-900 text-lg leading-5">
        Add Instructor (02)
      </h1>
      <div className="">
        <SearchUser/>
      </div>
      <div className="flex min-h-[9rem] items-start flex-wrap gap-4 w-full justify-start"></div>
    </div>
  );
}

export default AddInstructor;
