import staricon from 'modules/shared/assets/icons/bestSelling/star.svg';
import scoopIcon from 'modules/shared/assets/icons/scoop.svg';
import barber from 'modules/shared/assets/images/instructorImage/image.png';
import Button from 'modules/shared/components/Button';
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
type Props = {};

export const Teacher = (props: Props) => {
  return (
    <div className="flex flex-col pt-6 gap-y-6">
      <div className="flex items-center gap-x-3">
        <span className="text-2xl font-semibold tracking-tight scroll-m-20">
          Courses
        </span>
        <span className="text-xl">(975)</span>
      </div>
      <div className="flex items-center w-full gap-x-10 ">
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
        <div className="flex flex-col gap-3 w-[60%]">
          <label htmlFor="" className="text-sm text-gray-400">
            Courses :
          </label>{' '}
          <Select>
            <SelectTrigger className="w-full text-gray-700">
              <SelectValue placeholder="All Courses" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-gray-700 ">
                <SelectLabel>All Courses</SelectLabel>
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

      <div className="">
        <div className="w-[244px] border">
          <img src={barber} alt="" />
          <div className="flex flex-col items-center pt-1 pb-1 border-b border-gray-100">
            {' '}
            <span>Devon Lane</span>
            <span className="text-gray-500">Senior Developer</span>
          </div>

          <div className="flex flex-col justify-between p-2 pt-2 gap-y-3">
            <div className="flex justify-between">
              <div className="flex items-center gap-1 ">
                <img src={staricon} alt="staricon" width={20} />
                <span>5.0</span>
              </div>
              <div>
                <span className="text-gray-700">265.7K</span>
                <span className="text-gray-500"> students</span>
              </div>
            </div>
            <Button text="Send message" variant="secondaryPrimary" />
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

export default Teacher;
