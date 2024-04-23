import { useState } from 'react';
import SearchIcon from 'modules/instructor/assets/icons/NavBar/SearchIcon';
import Input from 'modules/shared/components/Input';

function Search() {
  const [value, setValue] = useState<string>();
  return (
    <div className="w-[30rem] relative max-lg:w-full">
      <SearchIcon className="absolute top-[25%] left-[0.8rem]" />
      <input
        className={`w-full pl-[3rem] bg-white py-[0.7rem] px-3  placeholder-gray-500 focus:outline-none  outline-none hover:border-1 text-[1rem] text-gray-700 font-light max-lg:w-full`}
        placeholder={'Search'}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
