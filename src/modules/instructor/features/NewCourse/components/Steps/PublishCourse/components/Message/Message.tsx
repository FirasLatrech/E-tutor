import { useGetCourseById } from 'modules/home/data/queries/home.query';
import { useCourseCreation } from 'modules/instructor/features/NewCourse/context/CourseCreationContext';
import { messageType } from 'modules/instructor/types/CourseSteps.type';
import TextArea from 'modules/shared/components/TextArea/TextArea';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function MessageSection() {
  const { Message, setMessage } = useCourseCreation();
   let [searchParams] = useSearchParams();
   const courseId = searchParams.get('id') || undefined;



 

  return (
    <div className="flex flex-col gap-[1.5rem] w-full">
      <h1 className="text-lg leading-5 text-gray-900 capitalize">message</h1>
      <div className="flex max-xl:flex-col items-center justify-center w-full gap-4">
        <TextArea
          name="welcomeMessage"
          label="Welcome Message"
          placeholder="Enter course starting message here..."
          onChange={(e) =>
            setMessage((prev: messageType) => {
              return {
                ...(prev || []),
                welcome_message: e.target.value,
              };
            })
          }
          value={Message?.welcome_message}
        />
        <TextArea
          name="congratulationsMessage"
          label="Congratulations Message"
          placeholder="Enter your course completed message here..."
          onChange={(e) =>
            setMessage((prev: messageType) => {
              return {
                ...(prev || []),
                congratulation_message: e.target.value,
              };
            })
          }
          value={Message?.congratulation_message}
        />
      </div>
    </div>
  );
}

export default MessageSection;
