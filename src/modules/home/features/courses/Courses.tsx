import BestSellingCoursesForCategory from 'modules/home/components/BestSellingCoursesForCategory';
import Course from 'modules/home/components/Course';
import PopularInstructor from 'modules/home/components/PopularInstructor';
import Populartools from 'modules/home/components/Populartools';
import BestSellingCourses from 'modules/home/components/bestSellingCourses';
import { useParams } from 'react-router';

const Courses = () => {
  const params = useParams();
  console.log(params);
  return (
    // <div className="flex items-center justify-center h-screen">
    <div className="flex flex-col h-full">
      <Course id={params?.id} />
    </div>
  );
};

export default Courses;
