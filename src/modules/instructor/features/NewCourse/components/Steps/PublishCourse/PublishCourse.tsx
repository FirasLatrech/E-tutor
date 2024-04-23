import React, { useEffect } from 'react';
import Button from 'modules/shared/components/Button';
import { useCourseCreation } from '../../../context/CourseCreationContext';
import { useSteps } from '../../../context/StepsContext';
import AddInstructor from './components/AddInstructor/AddInstructor';
import MessageSection from './components/Message/Message';
import { useUpdateCourseMutation } from 'modules/instructor/data/queries/course/Course.query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useToast } from 'modules/shared/components/ui/use-toast';
import { ToastAction } from 'modules/shared/components/ui/toast';
import { X } from 'lucide-react';
import { PATH } from 'modules/instructor/routes/paths';
import { useGetCourseById } from 'modules/home/data/queries/home.query';
import { instructorType } from 'modules/instructor/types/CourseSteps.type';
import CreateCourseLoader from 'modules/instructor/assets/icons/CreateCourse/Loader';

function PublishCourse() {
  const { Message, Instructors, setInstructors, setMessage } =
    useCourseCreation();
  const { currentStep, setCurrentStep } = useSteps();
  const {
    mutateAsync: updateCourseStep,
    isPending: isLoadingUpdate,
    data: created_course,
  } = useUpdateCourseMutation();
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const { toast } = useToast();
  const courseId = searchParams.get('id') || undefined;

  const { data: current_course_data, isFetching: course_loading } = courseId
    ? useGetCourseById(courseId)
    : { data: null, isFetching: null };

  async function CreateNewCourse() {
    const res = await updateCourseStep({
      course: {
        course_instructor: Instructors?.map((Instructor) => Instructor.id),
        ...Message,
      },
      courseId,
    });
    if (res) {
      toast({
        variant: 'success',
        title: 'course submitted successfully',

        action: (
          <ToastAction altText={res?.title}>
            <X className="w-5 h-5 bg-transparent" />
          </ToastAction>
        ),
      });
      navigate(PATH.COURSES);
    } else {
      toast({
        variant: 'error',
        title: 'something went wrong',
        action: (
          <ToastAction altText="Try again">
            <X className="w-5 h-5 bg-transparent" />
          </ToastAction>
        ),
      });
    }
  }

  useEffect(() => {
    if (current_course_data) {
      setInstructors(
        current_course_data?.instructor?.map((instructor: instructorType) => ({
          id: instructor?.id,
          username: instructor?.username,
          job: 'UI/UX Designer',
        }))
      );
    }
    if (Message) {
      setMessage({
        welcome_message: current_course_data.welcome_message,
        congratulation_message: current_course_data.congratulation_message,
      });
    }
  }, [current_course_data]);
  
  return (
    <div className="w-full px-9 min-h-[60vh] items-center justify-center  py-4 h-full flex flex-col gap-[3rem]">
      {course_loading ? (
        <CreateCourseLoader />
      ) : (
        <>
          <MessageSection />
          <AddInstructor />
          <div className="flex justify-between items-center pb-4 w-full mt-4">
            <Button
              onClick={() => {
                setCurrentStep((old) => old - 1);
              }}
              additionnalClasses="!p-4 !px-8 !text-lg"
              variant="tertiaryGray"
              text={'Prev Step'}
            />
            <Button
              variant="primary"
              additionnalClasses="!p-4 !px-8 !text-lg"
              text={
                isLoadingUpdate ? 'creating course...' : 'Submit for Review'
              }
              onClick={CreateNewCourse}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default PublishCourse;
