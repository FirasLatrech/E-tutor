import React from 'react';
import scoopIcon from 'modules/shared/assets/icons/scoop.svg';
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
import barber from '../_assets/images/image.png';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from 'modules/shared/components/ui/pagination';
import { SeparatorHorizontal } from 'lucide-react';
import Button from 'modules/shared/components/Button';
type Props = {};

export const Courses = (props: Props) => {
  return (
    <div className="flex flex-col pt-6 gap-y-6">
      <div className="flex items-center gap-x-3">
        <span className="text-2xl font-semibold tracking-tight scroll-m-20">
          Courses
        </span>
        <span className="text-xl">(975)</span>
      </div>
      <div className="flex items-center justify-around w-full ">
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-sm text-gray-400">
            Search :
          </label>{' '}
          <div className="border-gray-100 border-[1px] w-96  flex items-center justify-center pl-2 pr-2 ">
            <img src={scoopIcon} alt="scoopIcon" />
            <Input
              type="text"
              placeholder={'dlsdl'}
              className="w-full border-none outline-none placeholder:text-gray-500 "
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-sm text-gray-400">
            Sort by:
          </label>{' '}
          <Select>
            <SelectTrigger className="w-[200px] text-gray-700">
              <SelectValue placeholder="Latest" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-gray-700 ">
                <SelectLabel>Latest</SelectLabel>
                <SelectItem value="apple">Latest</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-sm text-gray-400">
            Status :
          </label>{' '}
          <Select>
            <SelectTrigger className="w-[200px] text-gray-700">
              <SelectValue placeholder="All Courses" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-gray-700 ">
                <SelectLabel>All Courses</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-sm text-gray-400">
            Teacher :
          </label>{' '}
          <Select>
            <SelectTrigger className="w-[200px] text-gray-700">
              <SelectValue placeholder="All Teachers" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-gray-700 ">
                <SelectLabel>All Teachers</SelectLabel>
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

      <div className="p-4">
        <div className="w-[312px] border border-gray-100 flex flex-col shadow-sm ">
          <img src={barber} alt="" />
          <div>
            <div className="flex flex-col p-2 border-b border-gray-100">
              {' '}
              <span className="text-gray-600 text-[14px] font-[300]">
                Reiki Level I, II and Master/Teacher Program
              </span>
              <span className="text-gray-900">1. Intorductions</span>
            </div>

            <div className="flex items-center justify-between h-[46px] pt-8 pb-8 pl-2 pr-2">
              <Button
                text="Watch Lecture"
                variant="secondaryPrimary"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
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
    </div>
  );
};

export default Courses;
