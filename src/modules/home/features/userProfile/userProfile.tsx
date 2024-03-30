import { MoveRight } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'modules/shared/components/ui/avatar';
import { getItem, setItem } from 'modules/shared/lib/localStorage';
import { cn } from 'modules/shared/lib/utility';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Dashbord from './_components/Dashbord';
import Courses from './_components/Courses';
import { Teacher } from './_components/Teacher';

type Props = {};
const aboutVideo = [
  {
    title: 'Dashboard',
    target: 'dashboard',
  },
  {
    title: 'Courses',
    target: 'courses',
  },
  {
    title: 'Teachers',
    target: 'teachers',
  },
  {
    title: 'Message',
    target: 'message',
  },
  {
    title: 'Wishlist',
    target: 'wishlist',
  },
  {
    title: 'Purchase History',
    target: 'purchaseHistory',
  },
];
const userProfile = (props: Props) => {
  const tap = getItem('tab');

  const [activeTab, setActiveTab] = useState(tap || 'dashboard'); // Default to 'dashboard' if no tab is provided

  const handleSave = (target: string) => {
    setItem('tab', target);
    setActiveTab(target);
  };
  return (
    <div>
      <div className="w-full bg-primary-100 h-[190px]"></div>
      <div className="flex items-center justify-center w-full h-full bg-white">
        <div className="w-[80%] bg-white ">
          <div className="relative h-full  -top-[150px] bg-white ">
            <div className="flex items-center justify-between w-full p-10">
              <div className="flex items-center gap-x-3">
                <Avatar className="w-[110px] h-[110px]">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/112077899?v=4"
                    alt="@Firas"
                  />
                  <AvatarFallback>FL</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-y-3 ">
                  <div className="text-gray-900 font-[600] text-[24px]">
                    Kevin Gilbert
                  </div>
                  <p className="text-gray-600">
                    Web Designer & Best-Selling Instructor
                  </p>
                </div>
              </div>

              <div className="flex gap-5 text-primary-500 w-[230px] bg-primary-200 h-[50px] items-center justify-center font-[600] cursor-pointer hover:opacity-50">
                Become Instructor
                <MoveRight
                  fill="#FF6636"
                  color="#FF6636"
                  className="duration-300 cursor-pointer hover:animate-out hover:rotate-x-30"
                />
              </div>
            </div>
            {/* //Tab */}
            <div className="w-full border-t border-b border-primary-100">
              <div className="flex items-center justify-between w-full pr-4 border-gray-100">
                {aboutVideo.map((item) => {
                  return (
                    <span
                      className={cn(
                        'w-[130px] hover:border-b-[1.5px] hover:border-primary-500  pt-4 duration:300 cursor-pointer text-center h-[60px] text-[16px] text-gray-700',
                        activeTab == item.target &&
                          'border-b-2 border-primary-500 text-gray-900'
                      )}
                      key={item.title}
                      onClick={() => {
                        handleSave(item.target);
                      }}
                    >
                      {item.title}
                    </span>
                  );
                })}
              </div>
            </div>
            {activeTab === 'dashboard' && <Dashbord />}
            {activeTab === 'courses' && <Courses />}
            {activeTab === 'teachers' && <Teacher />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default userProfile;
