import CreateCourseLoader from 'modules/instructor/assets/icons/CreateCourse/Loader';
import { useGetMyCourseQuery } from 'modules/instructor/data/queries/course/Course.query';

import CourseCard from './components/CourseCard/CourseCard';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';

function courses() {
  const { data: myCourse, isPending: isLaodingCourses } = useGetMyCourseQuery();
  return (
    <div className="flex w-full h-full items-start justify-center p-8 gap-[1rem] flex-wrap">
      <div className="w-[85%] flex px-8 self-start">
        <Search />
        <Filter />
      </div>
      <div className="grid max-lg:w-full max-lg:py-8 max-lg:px-2 gridMinMax w-[85%] h-full  items-center justify-start p-8 gap-[1.5rem] flex-wrap">
        {isLaodingCourses ? (
          <CreateCourseLoader />
        ) : (
          myCourse?.data?.map((course: any) => {
            return <CourseCard {...course} key={course.id} />;
          })
        )}
      </div>
    </div>
  );
}

export default courses;
