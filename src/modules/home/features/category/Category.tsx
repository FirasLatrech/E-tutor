import { useParams } from 'react-router';
import BestSellingCoursesForCategory from 'modules/home/components/BestSellingCoursesForCategory';
import Course from 'modules/home/components/Course';
import PopularInstructor from 'modules/home/components/PopularInstructor';
import Populartools from 'modules/home/components/Populartools';
import { useGetCategoryDetails } from 'modules/home/data/queries/home.query';

interface CategoryDetails {
  name: string;
}

const Category = () => {
  const params = useParams<{ id: string }>();
  if (!params?.id) return null;
  const { data: categoryDetails } = useGetCategoryDetails(params.id) as {
    data: CategoryDetails;
  };


  return (
    <div className="flex flex-col h-full">
      <BestSellingCoursesForCategory
        id={params?.id}
        categoryDetails={categoryDetails}
      />
      <Populartools id={params?.id} />
      <PopularInstructor id={params?.id} categoryDetails={categoryDetails} />
      <Course id={params?.id} />
    </div>
  );
};

export default Category;
