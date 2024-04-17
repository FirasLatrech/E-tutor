import { useParams } from 'react-router';
import { useGetCourseById } from 'modules/home/data/queries/home.query';
import Button from 'modules/shared/components/Button';
import { useModal } from 'modules/shared/providers/Modal/modal-provider';
import { ICourse } from 'modules/shared/types/course';
import { VideoPlayer } from '../watchCourse/_components/VideoPlayer';
import { AboutCourseCardDetails } from './_components/AboutCourseCardDetails';
import { BreadcrumbLink } from './_components/BreadcrumbLink';
import CustomModal from './_components/CourseDetailsModal';
import { CourseFor } from './_components/CourseFor';
import { CourseInstructor } from './_components/courseInstructor';
import { CourseRequirements } from './_components/CourseRequirements';
import { CourseRetting } from './_components/CourseRetting';
import { Curriclum } from './_components/Curriclum';
import { Description } from './_components/Description';
import { RelatedCourse } from './_components/RelatedCourse';
import { StudentFeedback } from './_components/StudentFeedback';
import { WhatWillLearnInCourse } from './_components/WhatWillLearnInCourse';
type Props = {};
const aboutVideo = [
  {
    title: 'Overview',
  },
  {
    title: 'Curriculum',
  },
  {
    title: 'Instructor',
  },
  {
    title: 'Review',
  },
];
/**
 * Renders the course details page with all the necessary components.
 *
 * @param {Props} props - The properties passed to the component.
 * @return {JSX.Element} The rendered course details page.
 */
const courseDetails = (props: Props) => {
  const params = useParams();
  const course_id = params.id;
  if (!course_id) return null;
  const { data } = useGetCourseById(course_id);
  const { setOpen, setClose } = useModal();

  const handleClick = () => {
    setOpen(<CustomModal title="Course Details" courseDetails={data} />);
  };
  return (
    <div className="flex flex-col items-center gap-6 ">
      <div className="w-full">
        <div className="flex items-center justify-center w-full h-full bg-[#f5f7fa] ">
          {/* BreadcrumbLink */}

          <BreadcrumbLink course_id={course_id} courseDetails={data} />
        </div>
        <div className="flex flex-col items-center justify-center w-full bg-white ">
          <div className="w-[80%] h-full pt-4 ">
            <div className="w-[70%]  max-lg:w-full">
              <VideoPlayer
                title="Firas Latrach"
                isLocked={false}
                playbackId={data?.course_trailer}
              />
            </div>

            <div className=" border-b border-gray-100 w-[70%] max-lg:w-full flex items-center justify-between">
              {aboutVideo.map((item) => {
                return (
                  <span
                    className="w-[130px] hover:border-b hover:border-primary-500  pt-4 duration:300 cursor-pointer text-center h-[60px] text-[16px] text-gray-900"
                    key={item?.title}
                  >
                    {item?.title}
                  </span>
                );
              })}
            </div>
            <div className="h-[60px] w-[70%] items-center justify-start max-lg:flex hidden">
              <Button text="Course Details" onClick={() => { handleClick(); }} />
            </div>

            <Description courseDetails={data} />
            {/* What you will learn in this course  */}
            <WhatWillLearnInCourse courseDetails={data} />

            {/* Who this course is for: */}
            <CourseFor courseDetails={data} />

            {/* Course requirements: */}
            <CourseRequirements courseDetails={data} />

            {/* Curriculum: */}
            <Curriclum />
            {/* CourseInstuctor  */}
            <CourseInstructor courseDetails={data} />

            {/* courseRetting  */}
            <CourseRetting />

            {/* student Feedback  */}
            <StudentFeedback />

            {/* <RelatedCourse /> */}
          </div>
        </div>
      </div>
      <div className="w-[360px] h-[1060px] shadow-lg absolute  right-[30px] bg-white flex flex-col self-start max-lg:hidden">
        <AboutCourseCardDetails courseDetails={data} />
      </div>
    </div>
  );
};
export default courseDetails;
