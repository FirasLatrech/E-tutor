import ArrowDown from 'modules/instructor/assets/icons/Stats/ArrowDown';
import Button from 'modules/shared/components/Button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'modules/shared/components/ui/avatar';
import { Progress } from 'modules/shared/components/ui/progress';
import React from 'react';

function EditProfileProgress() {
  return (
    <div className="w-full p-11 flex items-center justify-center bg-secondary-900">
      <div className="flex w-full items-center justify-between gap-[2rem]">
        <div className="flex items-center justify-center gap-[1.7rem]">
          <Avatar className="h-[5rem] w-[5rem]">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/112077899?v=4"
              alt="@Firas"
            />
            <AvatarFallback>FL</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-[0.6rem]">
            <h1 className="text-white">Vako Shvili</h1>
            <h1 className="text-white font-light text-opacity-50 text-sm leading-5">
              Vako.Shvili@gmail.com
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center w-[50%] gap-[1rem] tracking-tight ">
          <span className="text-white text-opacity-50 whitespace-nowrap">
            1/4 steps
          </span>
          <Progress value={25} />
          <p className="text-white whitespace-nowrap bg-opacity-95">
            25% completed
          </p>
        </div>
        <div className="flex gap-[1rem] items-start justify-center">
          <Button
            variant="primary"
            className="!py-4 !px-5 text-lg"
            text="Edit Biography"
          />
          <div className="bg-white cursor-pointer bg-opacity-5 p-[0.85rem] h-full  text-sm leading-5">
            <ArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfileProgress;
