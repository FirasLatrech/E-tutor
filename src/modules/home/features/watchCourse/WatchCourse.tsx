import Button from 'modules/shared/components/Button';
import React from 'react';
import arrowLeft from 'modules/shared/assets/arrow/arrowLeft.svg';
type Props = {};
import folderIcon from 'modules/shared/assets/icons/courseDetails/folderIcon.svg';
import playCircleIcon from 'modules/shared/assets/icons/courseDetails/playEditor.svg';
import clock from 'modules/shared/assets/icons/courseDetails/clockprimaryicon.svg';
import HeroSection from './_components/HeroSection';
import { VideoPlayer } from './_components/VideoPlayer';
import { LecturesDescription } from './_components/LecturesDescription';
import { LectureNotes } from './_components/LectureNotes';
import { AttachFiles } from './_components/AttachFiels';
import { Comments } from './_components/Comments';
import { Progress } from './_components/Progress';
import { Acordination } from './_components/Acordination';
import { useParams } from 'react-router';
import { useGetCourseById } from 'modules/home/data/queries/home.query';

const aboutVideo = [
  {
    title: 'Description',
  },
  {
    title: 'Lectures Notes',
  },
  {
    title: 'Attach File',
  },
  {
    title: 'Comments',
  },
];
const WatchCourse = (props: Props) => {
  const params = useParams();
  console.log(params);
  const course_id = params.id;
  console.log(course_id);
  if (!course_id) return null;
  const { data } = useGetCourseById(course_id);
  console.log(data);

  return (
    <div className="w-full h-full pb-6">
      {/* HerooSection */}
      <HeroSection courseDetails={data} />

      {/* CourseDetails  */}
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-between w-[97%] h-full bg-white pt-5">
          <div className="w-[60%]">
            <VideoPlayer title="Firas Latrach" isLocked={false} />
            <div className="flex flex-col pt-3 pb-3 gap-y-5">
              <div className="text-[22px] font-[600] text-gray-800 ">
                2. Sign up in Webflow
              </div>
              <div>
                {/* Student Avatar */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-4 rtl:space-x-reverse">
                      <img
                        className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                        src="https://avatars.githubusercontent.com/u/112077899?v=4"
                        alt=""
                      />
                      <img
                        className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                        src="https://avatars.githubusercontent.com/u/112077899?v=4"
                        alt=""
                      />
                      <img
                        className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                        src="https://avatars.githubusercontent.com/u/112077899?v=4"
                        alt=""
                      />
                      <img
                        className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                        src="https://avatars.githubusercontent.com/u/112077899?v=4"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[16px] font-[600]">512</span>
                      <span className="text-[14px] text-gray-600 ">
                        Students watching
                      </span>
                    </div>
                    <div></div>
                  </div>
                  <div className="flex self-end gap-x-5">
                    <div className="flex text-gray-600 text-[14px] font-[300]">
                      Last updated:{' '}
                      <span className="text-black text-[15px]">
                        Oct 26, 2020
                      </span>
                    </div>
                    <div className=" flex text-gray-600 text-[14px] font-[300]">
                      Comments:{' '}
                      <span className="text-black text-[15px]">154</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full border-t border-b border-gray-100 ">
              {aboutVideo.map((item) => {
                return (
                  <span
                    className="w-[160px] hover:border-b hover:border-primary-500  pt-4 duration:300 cursor-pointer text-center h-[60px] text-[16px] text-gray-900"
                    key={item.title}
                  >
                    {item.title}
                  </span>
                );
              })}
            </div>
            <LecturesDescription />
            <LectureNotes />
            <AttachFiles />
            <Comments />
          </div>
          {/* // Acordination */}
          <Acordination />
        </div>
      </div>
    </div>
  );
};

export default WatchCourse;
