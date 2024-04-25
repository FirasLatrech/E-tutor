import CreateCourseLoader from 'modules/instructor/assets/icons/CreateCourse/Loader';
import CourseCard from './components/CourseCard/CourseCard';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';
import useCourseStore from 'modules/instructor/store/course/courseStore';
import { useEffect } from 'react';
import PaginationSection from './components/Pagination/Pagination';
function courses() {
  const { data, setData, isLoading } = useCourseStore((state) => state);

  useEffect(() => {
    setData({});
  }, []);

  return (
    <div className="w-full flex overflow-auto h-full justify-center items-center">
      <div className="w-[88%] h-full flex justify-center items-center">
        <div className="flex w-full h-full py-14 items-start justify-center p-8 gap-[1rem] flex-wrap">
          <div className="w-full flex gap-3 justify-center self-center">
            <Search />
            <Filter />
          </div>
          <div className="grid max-lg:w-full max-lg:py-8 max-lg:px-2 gridMinMax w-full h-full  items-start justify-start py-8 gap-[1.5rem] flex-wrap">
            {isLoading ? (
              <div className="w-full col-span-12 self-center h-full flex justify-center items-center">
                <CreateCourseLoader />
              </div>
            ) : data?.data?.length > 0 ? (
              data?.data?.map((course: any) => {
                return <CourseCard {...course} key={course.id} />;
              })
            ) : (
              <div className="whitespace-nowrap col-span-full flex items-center justify-center w-full h-full">
                No data found
              </div>
            )}
            <div className="col-span-full pb-6 flex justify-center items-center">
              <PaginationSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default courses;
