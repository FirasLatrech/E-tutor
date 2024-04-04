import CloseIcon from 'modules/instructor/assets/icons/CreateCourse/CloseIcon';
import DeleteIcon from 'modules/instructor/assets/icons/CreateCourse/deleteIcon';
import { useCourseSections } from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'modules/shared/components/ui/avatar';
import React from 'react';

interface UserCardPropsType {
  username: string;
  pictureLink: string;
  job: string;
  id: string;
}

function UserCard({ username, pictureLink, job, id }: UserCardPropsType) {
  const { setInstructors } = useCourseSections();
  return (
    <div className="p-4 hover:bg-gray-100 cursor-pointer ease-linear duration-200 min-w-[18rem] bg-gray-50 flex gap-[1rem] items-center justify-between">
      <div
        onClick={() => {
          setInstructors((prev) => {
            if (prev?.some((user) => user?.id == id)) return prev;
            return [
              ...(prev || []),
              { id, username, pictureLink: '', job: 'UI/Ux Designer' },
            ];
          });
        }}
        className="flex gap-[1rem] items-center justify-center"
      >
        <Avatar className="h-[3rem] w-[3rem]">
          <AvatarImage
            src={
              pictureLink ||
              'https://avatars.githubusercontent.com/u/112077899?v=4'
            }
            alt="@Firas"
          />
          <AvatarFallback>FL</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-center gap-2">
          <p className="capitalize text-gray-900 text-sm font-semibold">
            {username}
          </p>
          <p className="leading-5 text-gray-600 text-sm ">{job}</p>
        </div>
      </div>
      <CloseIcon
        onClick={() => {
          setInstructors(
            (prev) => prev?.filter((user) => user?.id != id) || []
          );
        }}
        className="cursor-pointer"
      />
    </div>
  );
}

export default UserCard;
