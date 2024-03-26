import React, { useState } from 'react';
import arrowLeft from 'modules/shared/assets/icons/category/arrowleft.svg';
import arrowRight from 'modules/shared/assets/icons/category/arrowright.svg';

export default function Populartools({ id }: { id: string | undefined }) {
  console.log(id);
  const tools = [
    {
      name: 'HTML 5',
      count: '2,736',
    },
    {
      name: 'CSS 3',
      count: '2,736',
    },
    {
      name: 'JavaScript',
      count: '2,736',
    },
    {
      name: 'ReactJS',
      count: '2,736',
    },
    {
      name: 'NextJS',
      count: '2,736',
    },
    {
      name: 'Angular',
      count: '2,736',
    },
    {
      name: 'VueJS',
      count: '2,736',
    },
    {
      name: 'NodeJS',
      count: '2,736',
    },
    {
      name: 'ExpressJS',
      count: '2,736',
    },
  ];
  const popularKeyword = [
    'HTML 5',
    'CSS 3',
    'JavaScript',
    'ReactJS',
    'NextJS',
    'Angular',
    'VueJS',
    'NodeJS',
    'ExpressJS',
  ];
  const [page, setPage] = useState(0);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(tools.length / cardsPerPage);

  const handleNextPage = () => {
    setPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = page * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, tools.length);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-5 bg-white pb-[70px]">
      <div className="w-[82%] flex items-center justify-between">
        <span className="text-gray-900 text-[24px] font-[600]">
          Popular tools
        </span>
        <div className="flex gap-3">
          <img
            src={arrowLeft}
            alt="Previous"
            className="cursor-pointer"
            onClick={handlePrevPage}
          />
          <img
            src={arrowRight}
            alt="Next"
            className="cursor-pointer"
            onClick={handleNextPage}
          />
        </div>
      </div>
      <div className="flex gap-5">
        {tools.slice(startIndex, endIndex).map((tool, index) => (
          <div
            className="w-[200px] h-[94px] border border-gray-100 flex items-center justify-center flex-col gap-3 hover:shadow-xl duration-300"
            key={index}
          >
            <span className="duration-300 cursor-pointer hover:text-primary-500">
              {tool.name}
            </span>
            <span className="text-gray-500">{tool.count} Courses</span>
          </div>
        ))}
      </div>
      <div className="w-[82%] flex items-center gap-5 ">
        <span className="text-gray-900 text-[18px] font-[400]">
          Popular keyword:
        </span>
        <div className="flex gap-3">
          {popularKeyword.map((item, index) => (
            <span className="px-4 text-gray-900 duration-300 cursor-pointer p bg-gray-50 hover:text-primary-500">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
