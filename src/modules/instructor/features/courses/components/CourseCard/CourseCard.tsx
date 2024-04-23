import RatingIcon from 'modules/instructor/assets/icons/Courses/RatingIcon';
import StudentIcon from 'modules/instructor/assets/icons/Courses/StudentIcon';
import ThreeDots from 'modules/instructor/assets/icons/Courses/ThreeDots';
import UploadFileIcon from 'modules/instructor/assets/icons/CreateCourse/UploadFileIcon';
import { Badge } from 'modules/shared/components/Tag/Tag';

function CourseCard({ course_thumbnail, course_category, title }: any) {
  return (
    <div className="min-w-[19rem] w-full max-md:col-span-12 col-span-3 max-4xl:col-span-4 max-xl:col-span-5 flex rounded-sm flex-col items-center justify-start bg-white">
      <div className="w-full overflow-hidden  border-t border-r border-l shadow-sm border-gray-100 bg-gray-50 flex items-center h-[15rem] justify-center">
        {course_thumbnail ? (
          <img
            src={course_thumbnail?.path}
            className="object-cover w-full duration-300 cursor-pointer hover:scale-125 h-full"
          />
        ) : (
          <UploadFileIcon />
        )}
      </div>
      <div className="border-b-[1.7px] border-gray-100 flex items-center w-full py-4 gap-[1rem] flex-col">
        <div className="w-[90%] flex items-start flex-col gap-3">
          <Badge variant="secondary">{course_category?.name}</Badge>
          <p>{title}</p>
        </div>
      </div>
      <div className="border-b-[1.7px] border-gray-100 flex items-center w-full py-4 gap-[1rem] flex-col">
        <div className="flex items-center justify-between w-[90%]">
          <div className="flex items-center justify-center gap-2">
            <RatingIcon />
            <span className="text-gray-700">4.9</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <StudentIcon />
            <span className="text-gray-700 font-normal">982,941</span>
            <span className="text-sm text-gray-500 font-light ">students</span>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full py-4 gap-[1rem] flex-col">
        <div className="w-[90%] flex items-start justify-between gap-3">
          <span className="text-primary-500 font-semibold">$234.00</span>
          <ThreeDots className="cursor-pointer hover:bg-gray-50 rounded-full ease-linear duration-150" />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
