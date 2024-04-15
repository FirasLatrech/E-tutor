import React, { useEffect, useMemo, useState, useRef } from 'react';
import debounce from 'lodash/debounce';

import scoopIcon from 'modules/shared/assets/icons/scoop.svg';

import { Input } from 'modules/shared/components/ui/input';

interface SearchInputProps {
  onSearch: (query: string) => void;

  placeholder?: string;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,

  ...props
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useMemo(() => {
    return (searchQuery: string) => {
      onSearch(searchQuery.trim().replace(' ', '%20'));
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(() => handleSearch(query), 500);
  }, [handleSearch, query]);

  useEffect(() => {
    debouncedResults();

    if (inputRef.current) {
      inputRef.current.focus();
    }

    return () => {
      debouncedResults.cancel();
    };
  }, [debouncedResults]);

  return (
    <div className="border-gray-100 border-[1px] w-96  flex items-center justify-center pl-2 pr-2 ">
      <img src={scoopIcon} alt="scoopIcon" />

      <Input
        type="text"
        placeholder={'UI/UX Design'}
        className="w-full border-none outline-none placeholder:text-gray-500 "
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
      />
    </div>
  );
};

export default SearchInput;
