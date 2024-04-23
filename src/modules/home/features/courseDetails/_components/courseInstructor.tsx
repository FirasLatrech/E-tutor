import startIcon from 'modules/shared/assets/icons/bestSelling/star.svg';
import playCircleIcon from 'modules/shared/assets/icons/courseDetails/playCircle.svg';
import userIcon from 'modules/shared/assets/icons/courseDetails/PriamryUsersIcons.svg';
import InstructorImage from 'modules/shared/assets/images/instructorImage/image.png';
import { type ICourse } from 'modules/shared/types/course';
type Props = {
  courseDetails: ICourse;
};
type instructor = {
  firstName: string;
  lastName: string;
  photo: {
    path: string;
  };
};
[];
const data = [
  {
    icon: startIcon,
    value: '4.9',
    label: 'Course rating',
  },
  {
    icon: userIcon,
    value: '236,568',
    label: 'Students',
  },
  {
    icon: playCircleIcon,
    value: '09',
    label: 'Courses',
  },
];
export const CourseInstructor = ({ courseDetails }: Props) => {
  const instructor = courseDetails?.instructor;
  return (
    <div className="pt-6 w-[70%] max-lg:w-full flex flex-col gap-8 h-full pb-6">
      <div className="flex flex-col items-start justify-between gap-5">
        <div className="text-2xl font-semibold tracking-tight scroll-m-20">
          Course instructor ({instructor?.length})
        </div>
        <div className="w-full">
          {instructor?.map((item: instructor, index: number) => {
            return (
              <div
                className="border border-gray-100  h-[238px] max-sm:h-full w-full p-3 flex gap-4"
                key={index}
              >
                <div className="w-[200px] h-[200px] max-sm:h-full overflow-hidden rounded-full max-sm:hidden">
                  <img
                    src={item?.photo?.path || InstructorImage}
                    alt=""
                    width={200}
                    height={200}
                    className="object-cover rounded-full "
                  />
                </div>
                <div className="flex flex-col gap-4 w-[70%]">
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-900 text-[24px] font-[500]">
                      {' '}
                      {item.firstName} {item.lastName}
                    </span>
                    <p className="text-[14] font-[300] text-gray-700">
                      Entrepreneur & Designer • Founder of ShiftRide
                    </p>
                  </div>
                  <div className="flex items-center gap-x-6">
                    {data.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <img
                          src={item.icon}
                          alt={`${item.label} Icon`}
                          width={18}
                          height={18}
                        />
                        <div className="text-gray-700 text-[15px] font-[300]">
                          <span className="text-[16px] font-[400] text-gray-900">
                            {item.value}
                          </span>{' '}
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=" text-[14px] font-[300] text-gray-700 ">
                    One day Vako had enough with the One day Vako had enough
                    with the One day Vako had enough with the
                    <span className="font-[600] hover:underline cursor-pointer">
                      READ MORE
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
