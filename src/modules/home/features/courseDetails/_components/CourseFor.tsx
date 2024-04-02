import arrowRight from 'modules/shared/assets/arrow/arrowRightPrimary.svg';
type Props = {};

export const CourseFor = (props: Props) => {
  return (
    <div className="pt-6 w-[70%] flex flex-col gap-8 h-full pb-6">
      <div className="flex flex-col items-start gap-3">
        <div className="text-2xl font-semibold tracking-tight scroll-m-20">
          Who this course is for:
        </div>
        <div className="flex items-center gap-x-5">
          <img src={arrowRight} alt="arrowRight" />
          <div className="text-gray-700 text-[14px] font-[300]">
            This course is for those who want to launch a Freelance Web Design
            career.
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <img src={arrowRight} alt="arrowRight" />
          <div className="text-gray-700 text-[14px] font-[300]">
            Praesent eget consequat elit. Duis a pretium purus.
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <img src={arrowRight} alt="arrowRight" />
          <div className="text-gray-700 text-[14px] font-[300]">
            Sed sagittis suscipit condimentum pellentesque vulputate feugiat
            libero nec accumsan.
          </div>
        </div>
      </div>
    </div>
  );
};
