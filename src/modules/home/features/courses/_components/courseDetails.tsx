import React, { useEffect, useMemo, useRef, useState } from 'react';
import { TooltipContent } from '@radix-ui/react-tooltip';
import { SeparatorHorizontal } from 'lucide-react';
import staricon from 'modules/shared/assets/icons/bestSelling/star.svg';
import filterIcon from 'modules/shared/assets/icons/course/filter.svg';
import primaryFilter from 'modules/shared/assets/icons/course/primaryfilter.svg';
import webdevelopment from 'modules/shared/assets/icons/course/webdevelempent.svg';
import { AnimatePresence, motion } from 'framer-motion';
import PriamryUsersIcons from 'modules/shared/assets/icons/courseDetails/PriamryUsersIcons.svg';
import scoopIcon from 'modules/shared/assets/icons/scoop.svg';
import MachineLeanringCover from 'modules/shared/assets/images/bestsellingcourse/image1.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'modules/shared/components/ui/accordion';
import { Checkbox } from 'modules/shared/components/ui/checkbox';
import { Input } from 'modules/shared/components/ui/input';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from 'modules/shared/components/ui/select';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from 'modules/shared/components/ui/tooltip';
import { cn } from 'modules/shared/lib/utility';

import { ICourse } from 'modules/shared/types/course';
import useDebounce from 'modules/shared/hooks/useDebounce';
import Spinner from 'modules/shared/components/Spinner';
import { Skeleton } from 'modules/shared/components/ui/skeleton';
import Button from 'modules/shared/components/Button';
import debounce from 'lodash/debounce';
import {
  useAllCategory,
  useGetAllCourse,
  useGetCourseByCategoryId,
} from 'modules/home/data/queries/home.query';
import SearchInput from 'modules/home/components/inputSearch';
import Pagination from 'modules/shared/components/pagination/pagination';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';
import { LastThreeMonths } from '../hooks/LastThreeMonths';
import Suggestion from './Suggestion';

interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
  create_by: number;
  courses_count: number;
  background_color: string;
  createdAt: string;
  deletedAt: string | null;
}

export default function Course() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pagex = searchParams.get('page');
  const pageCount = pagex ? parseInt(pagex) : 1;
  console.log(pageCount);

  const [page, setPage] = useState(pageCount ? pageCount : 1);

  const [filterState, setFilterState] = useState(false);
  const [search, setSearch] = useState('');
  const [month, setMonth] = useState('');
  console.log(month);
  const debouncedSearchTerm = useDebounce(search, 600);
  console.log(debouncedSearchTerm);

  const {
    data: courseDetails,
    isPending,
    error,
  } = useGetAllCourse(debouncedSearchTerm, month, page);
  console.log(courseDetails);
  const data = courseDetails?.data;
  const totalPageCount = courseDetails?.totalPageCount;
  console.log(totalPageCount);

  const { data: allCategory } = useAllCategory();

  const navigate = useNavigate();
  const handelNaviage = (id: number) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-[20px] pb-[20px]">
      <div className="w-[83%]">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <div
              className="flex w-[147px] items-center gap-2 p-3 border border-primary-200 h-[48px]  justify-between cursor-pointer"
              onClick={() => {
                setFilterState(!filterState);
              }}
            >
              <div className="flex items-center gap-2">
                <img
                  src={filterState ? primaryFilter : filterIcon}
                  alt="filterIcon"
                  className="text-primary-500"
                />
                <span
                  className={cn(
                    'font-bold ',
                    filterState && 'text-primary-500'
                  )}
                >
                  {' '}
                  Filter{' '}
                </span>
              </div>
              <span className="flex items-center justify-center h-6 p-1 text-white bg-primary-500">
                3
              </span>
            </div>
            <SearchInput onSearch={setSearch} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700 text-[14px]">Sort By : </span>
            <Select
              onValueChange={(obj) => {
                setMonth(obj);
              }}
            >
              <SelectTrigger className="w-[200px] h-[48px] text-gray-700">
                <SelectValue placeholder="month" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="text-gray-700 ">
                  {LastThreeMonths().map((item, index) => (
                    <SelectItem value={item.data} key={index}>
                      {item.month}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Suggestion />
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex gap-4 w-[83%]">
          {filterState && (
            <div className="w-[300px] bg-white flex flex-col gap-5 duration-500	 transition-all">
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="">CATEGORY</AccordionTrigger>
                  <AccordionContent>
                    {allCategory &&
                      allCategory.map((item: Category) => {
                        return (
                          <AccordionContent
                            className="pt-1 border-l border-r flex border-b  justify-star items-center  p-2 h-[50px] border-gray-100"
                            key={item?.id}
                          >
                            <div className="flex items-center w-full h-full space-x-2 ">
                              <Checkbox
                                id="terms"
                                className=" peer text-gray-200 border-gray-200  w-[18px] h-[18px] peer"
                              />
                              <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {item.name}
                              </label>
                            </div>
                          </AccordionContent>
                        );
                      })}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="">TOOLS</AccordionTrigger>

                  <AccordionContent className="pt-1 border-l border-b border-r border-gray-100 flex  justify-star items-center  p-2 h-[43px]">
                    <div className="flex items-center justify-between w-full h-full space-x-2">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="Web"
                          className="text-gray-200 border-gray-200  w-[18px] h-[18px] peer"
                        />
                        <label
                          htmlFor="Web"
                          className="text-sm font-[400]  leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          React
                        </label>
                      </div>
                      <span className="text-gray-500"> 1452</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
          {isPending && (
            <div className="flex h-[330px] gap-x-6">
              <Skeleton className="w-[300px] h-[300px]" />
              <Skeleton className="w-[300px] h-[300px]" />
              <Skeleton className="w-[300px] h-[300px]" />
              <Skeleton className="w-[300px] h-[300px]" />

              <Skeleton className="w-[300px] h-[300px]" />
            </div>
          )}
          {data && data.length == 0 && (
            <div className="flex h-[330px] gap-x-6 items-center justify-center w-full">
              <div className="w-[300px] h-[300px]  items-center justify-center flex flex-col gap-5">
                <span className="gray-900 text-[53px]   text-pretty   scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
                  No class for this name
                </span>
                <Button
                  text="Clear the Search Input"
                  onClick={() => {
                    setSearch('');
                  }}
                />
              </div>
            </div>
          )}
          <motion.div
            className={
              filterState
                ? 'grid grid-cols-3 gap-6 '
                : 'grid grid-cols-4 gap-6 '
            }
            layout
          >
            <AnimatePresence>
              {data &&
                data?.map((item: ICourse) => {
                  return (
                    <motion.div
                      className="flex w-[294px] flex-col items-center justify-center  bg-white border"
                      style={{ direction: 'ltr' }}
                      key={item.id}
                      layout
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      onClick={() => handelNaviage(item.id)}
                    >
                      <div className="h-[183px] w-[294px] overflow-hidden ">
                        <img
                          src={item.course_thumbnail}
                          alt=""
                          width={294}
                          height={183}
                          className="duration-300 cursor-pointer hover:scale-125"
                        />
                      </div>
                      <div className="w-full text-gray-700 ">
                        <div className="flex items-center justify-between h-[40px] p-2 pt-3">
                          {/* Tags */}
                          <span className="p-1 text-sm bg-primary-100 text-primary-700">
                            {item.course_categories?.name}
                          </span>

                          <span className="text-xl text-primary-500">
                            ${item?.course_price}
                          </span>
                        </div>
                        <div className="text-gray-900 font-[400]  h-[60px] p-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className="text-start">
                                {item?.title}
                              </TooltipTrigger>
                              <TooltipContent>
                                <span>{item?.title}</span>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <hr className="w-full mt-1 mb-1 bg-gray-100" />
                        <div className="flex items-center justify-between pt-2 h-[46px] p-2">
                          <div className="flex items-center gap-1 ">
                            <img src={staricon} alt="staricon" width={20} />
                            <span>{item.rating}</span>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <img
                              src={PriamryUsersIcons}
                              alt="staricon"
                              width={20}
                            />

                            <span className="text-gray-700">
                              {item.enrollmentCount}
                            </span>
                            <span className="text-gray-500"> students</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div className="pt-6 pb-6">
        <Pagination
          hasNextPage={courseDetails?.hasNextPage}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
