import { useParams } from 'react-router';
import BestSellingCourses from 'modules/home/components/bestSellingCourses';
import BestSellingCoursesForCategory from 'modules/home/components/BestSellingCoursesForCategory';

import PopularInstructor from 'modules/home/components/PopularInstructor';
import Populartools from 'modules/home/components/Populartools';
import Course from './_components/courseDetails';

const Courses = () => {
  const params = useParams();
  console.log(params);

  return (
    // <div className="flex items-center justify-center h-screen">
    <div className="flex flex-col h-full">
      <Course />
    </div>
  );
};

export default Courses;
