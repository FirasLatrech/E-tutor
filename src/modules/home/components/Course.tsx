import React, { useState } from 'react';
import { TooltipContent } from '@radix-ui/react-tooltip';
import { SeparatorHorizontal } from 'lucide-react';
import staricon from 'modules/shared/assets/icons/bestSelling/star.svg';
import filterIcon from 'modules/shared/assets/icons/course/filter.svg';
import primaryFilter from 'modules/shared/assets/icons/course/primaryfilter.svg';
import webdevelopment from 'modules/shared/assets/icons/course/webdevelempent.svg';
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
export default function Course({ id }: { id: string | undefined }) {
  const [filterState, setFilterState] = useState(false);
  const courses = [
    {
      cover: MachineLeanringCover,
      tag: 'DESIGN',
      price: '$57.00',
      title: 'Machine Learning A-Z™: Hands-On Python ...',
      fullTitle: 'Machine Learning A-Z™: Hands-On Python & R In Data',
      rating: '5.0',
      students: '265.7K',
    },
    {
      cover: MachineLeanringCover,
      tag: 'DESIGN',
      price: '$57.00',
      title: 'Machine Learning A-Z™: Hands-On Python ...',
      fullTitle: 'Machine Learning A-Z™: Hands-On Python & R In Data',
      rating: '5.0',
      students: '265.7K',
    },
    {
      cover: MachineLeanringCover,
      tag: 'DESIGN',
      price: '$57.00',
      title: 'Machine Learning A-Z™: Hands-On Python ...',
      fullTitle: 'Machine Learning A-Z™: Hands-On Python & R In Data',
      rating: '5.0',
      students: '265.7K',
    },
    {
      cover: MachineLeanringCover,
      tag: 'DESIGN',
      price: '$57.00',
      title: 'Machine Learning A-Z™: Hands-On Python ...',
      fullTitle: 'Machine Learning A-Z™: Hands-On Python & R In Data',
      rating: '5.0',
      students: '265.7K',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center pt-[20px] pb-[20px]">
      <div className="w-[83%]">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <div
              className="flex w-[147px] items-center gap-2 p-3 border border-primary-200 h-[48px]  justify-between cursor-pointer"
              onClick={() => { setFilterState(!filterState); }}
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
            <div className="border-gray-100 border-[1px] w-96  flex items-center justify-center pl-2 pr-2 ">
              <img src={scoopIcon} alt="scoopIcon" />
              <Input
                type="text"
                placeholder={'UI/UX Design'}
                className="w-full border-none outline-none placeholder:text-gray-500 "
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700 text-[14px]">Sort By : </span>
            <Select>
              <SelectTrigger className="w-[200px] h-[48px] text-gray-700">
                <SelectValue placeholder="Browse" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="text-gray-700 ">
                  <SelectLabel>Trending</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
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
      <div className="flex gap-12">
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

        <div className={`grid grid-cols-3 gap-4 `}>
          {/* TODO : render all Course  */}

          {courses.map((course, index) => (
            <div
              className="flex w-[294px] flex-col items-center justify-center  bg-white border"
              key={index}
            >
              <div className="h-[183px] w-[294px] overflow-hidden">
                <img
                  src={course.cover}
                  alt=""
                  width={294}
                  height={183}
                  className="duration-300 cursor-pointer hover:scale-125"
                />
              </div>
              <div className="p-2 text-gray-700">
                <div className="flex items-center justify-between h-[40px] ">
                  <span className="p-1 text-sm bg-primary-100 text-primary-700">
                    {course.tag}
                  </span>
                  <span className="text-xl text-primary-500">
                    {course.price}
                  </span>
                </div>
                <div className="text-gray-900 font-[400]  h-[60px] ">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="text-start">
                        {course.title}
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>{course.fullTitle}</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <SeparatorHorizontal size={1} className="w-full bg-gray-100" />
                <div className="flex items-center justify-between pt-2 h-[46px]">
                  <div className="flex items-center gap-1 ">
                    <img src={staricon} alt="staricon" width={20} />
                    <span>{course.rating}</span>
                  </div>
                  <div>
                    <span className="text-gray-700">{course.students}</span>
                    <span className="text-gray-500"> students</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 pb-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem className="rounded-full hover:bg-primary-100">
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
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
