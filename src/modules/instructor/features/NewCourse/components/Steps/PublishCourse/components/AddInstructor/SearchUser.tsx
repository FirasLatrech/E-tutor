import { SearchIcon } from 'lucide-react';
import React, { useState } from 'react';

function SearchUser() {
  const [searchValue, setSearchValue] = useState('');
  const [isTyping, setTyping] = useState<boolean>(false);

  return (
    <div className="w-[38rem] relative ">
      <SearchIcon className="absolute top-[25%] left-[0.8rem]" />
      <input
        className={`w-full border border-gray-100 pl-[3rem] bg-gray-white py-[0.7rem] px-3  placeholder-gray-500 focus:outline-none  outline-none hover:border-1 text-[1rem] text-gray-700 font-light`}
        placeholder={'Search by username'}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setTyping(true)}
        onBlur={() => setTyping(false)}
      />
      {isTyping && (
        <div className="w-full border top-[3.3rem]  border-gray-100 absolute min-h-[12rem]">
            
        </div>
      )}
    </div>
  );
}

export default SearchUser;
