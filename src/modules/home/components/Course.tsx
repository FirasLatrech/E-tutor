import React, { useEffect, useMemo, useRef, useState } from 'react';
import { TooltipContent } from '@radix-ui/react-tooltip';
import { SeparatorHorizontal } from 'lucide-react';
import staricon from 'modules/shared/assets/icons/bestSelling/star.svg';
import filterIcon from 'modules/shared/assets/icons/course/filter.svg';
import primaryFilter from 'modules/shared/assets/icons/course/primaryfilter.svg';
import webdevelopment from 'modules/shared/assets/icons/course/webdevelempent.svg';
import { AnimatePresence, motion } from 'framer-motion';

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
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from 'modules/shared/components/ui/pagination';
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
import { useGetCourseByCategoryId } from '../data/queries/home.query';
import { ICourse } from 'modules/shared/types/course';
import useDebounce from 'modules/shared/hooks/useDebounce';
import Spinner from 'modules/shared/components/Spinner';
import { Skeleton } from 'modules/shared/components/ui/skeleton';
import Button from 'modules/shared/components/Button';
import debounce from 'lodash/debounce';
import SearchInput from './inputSearch';

export default function Course({ id }: { id: string }) {
  function LastThreeMonths() {
    const currentDate = new Date();

    const currentMonth = currentDate.getMonth();
    console.log(currentMonth);
    const currentYear = currentDate.getFullYear();
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // Generate options for the last three months
    const lastThreeMonths = [];
    for (let i = 0; i < 3; i++) {
      let monthIndex = (currentMonth - i + 12) % 12; // Ensure index is within 0-11 range
      let year = currentYear;
      if (monthIndex > currentMonth) {
        year--; // If month is in previous year
      }
      lastThreeMonths.push({
        month: months[currentMonth - 1],
        year: currentYear,
        data: `${currentYear}-${
          currentMonth < 10 ? '0' + currentMonth : currentMonth
        }-01`,
      });
    }
    return lastThreeMonths;
  }

  console.log(LastThreeMonths());
  const [filterState, setFilterState] = useState(false);
  const [search, setSearch] = useState('');
  const [month, setMonth] = useState('');
  console.log(month);
  const debouncedSearchTerm = useDebounce(search, 600);
  console.log(debouncedSearchTerm);

  const { data, isPending, error } = useGetCourseByCategoryId(
    id,
    debouncedSearchTerm,
    month
  );

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
        <div className="flex items-center justify-between">
          <div className="flex ">
            <div className="flex  items-center gap-2 p-3   h-[48px]  justify-between cursor-pointer">
              Suggestion :
            </div>
            <div className="flex items-center gap-2 text-primary-500">
              <span>user interface</span>
              <span>user experience</span>
              <span>web design</span>
              <span>interface</span>
              <span>app</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary-500">
            <span className="text-gray-900">3,145,684</span>
            <span className="text-gray-700">
              results find for “ui/ux design”
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex gap-12 w-[83%]">
          {filterState && (
            <div className="w-[300px] bg-white flex flex-col gap-5 duration-500	 transition-all">
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="">CATEGORY</AccordionTrigger>
                  <AccordionContent>
                    <AccordionItem
                      value="item-2"
                      className="border-b border-gray-100"
                    >
                      <AccordionTrigger className="flex">
                        <div className="flex items-center gap-3 ">
                          <img src={webdevelopment} alt="" className="" />
                          <span>Development</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-1 border-l border-r flex  justify-star items-center  p-2 h-[50px] border-gray-100">
                        <div className="flex items-center w-full h-full space-x-2 ">
                          <Checkbox
                            id="terms"
                            className=" peer text-gray-200 border-gray-200  w-[18px] h-[18px] peer"
                          />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Web development
                          </label>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
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
          <motion.div className="flex gap-3 " layout>
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
                            {item.course_category?.name}
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
                          <div>
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
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem className="rounded-full hover:bg-primary-100">
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
