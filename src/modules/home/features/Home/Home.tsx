import BecomeAnInstructor from 'modules/home/components/BecomeAnInstructor';
import BestSellingCourses from 'modules/home/components/bestSellingCourses';
import HeroSection from 'modules/home/components/heroSection';
import RecentlyAddedCourses from 'modules/home/components/recentlyAddedCourses';
import TopCategory from 'modules/home/components/topCategory';

const Home = () => {
  return (
    // <div className="flex items-center justify-center h-screen">
    <div className="flex flex-col h-full">
      <HeroSection />

      {/* // browse top Category  */}
      <TopCategory />
      <BestSellingCourses />
      <RecentlyAddedCourses />
      <BecomeAnInstructor />
    </div>
  );
};

export default Home;
