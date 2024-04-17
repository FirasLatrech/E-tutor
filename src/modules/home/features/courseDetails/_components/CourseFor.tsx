// import arrowRight from 'modules/shared/assets/arrow/arrowRightPrimary.svg';
import arrowright from 'modules/shared/assets/icons/arrow/arrowRightPrimary.svg';
import { type ICourse } from 'modules/shared/types/course';
type Props = {
  courseDetails: ICourse;
};

export const CourseFor = ({ courseDetails }: Props) => {
  return (
    <div className="pt-6 w-[70%] flex flex-col gap-8 h-full pb-6 max-lg:w-full">
      <div className="flex flex-col items-start gap-3">
        <div className="text-2xl font-semibold tracking-tight scroll-m-20">
          Who this course is for:
        </div>
        {courseDetails?.target_audience?.map((item: string, index: number) => (
          <div className="flex items-center gap-x-5" key={index}>
            <img src={arrowright} alt="arrowRight" />
            <div className="text-gray-700 text-[14px] font-[300]">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
