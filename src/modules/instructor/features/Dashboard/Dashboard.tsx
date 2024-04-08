import AvatarIcon from 'modules/instructor/assets/icons/Stats/AvatarIcon';
import CalendarIcon from 'modules/instructor/assets/icons/Stats/CalendarIcon';
import CardIcon from 'modules/instructor/assets/icons/Stats/CardIcon';
import CheckIcon from 'modules/instructor/assets/icons/Stats/CheckIcon';
import CupIcon from 'modules/instructor/assets/icons/Stats/CupIcon';
import StackIcon from 'modules/instructor/assets/icons/Stats/StackIcon';
import StatsCard from './components/statsCards/StatsCard';
import PeopleIcon from 'modules/instructor/assets/icons/Stats/PeopleIcon';
import EditProfileProgress from './components/EditProfileProgress/EditProfileProgress';
import RecentActivity from './components/RecentActivity/RecentActivity';
import RevenueRechart from './components/RevenueChart/RevenueChart';

function Dashboard() {
  const statsCard = [
    {
      backgroundColor: '#FFEEE8',
      color: '',
      Icon: AvatarIcon, //PlayIcon,
      name: 'Enrolled Courses',
    },
    {
      backgroundColor: '#EBEBFF',
      color: '',
      Icon: CheckIcon,
      name: 'Active Courses',
    },
    {
      backgroundColor: '#FFF2E5',
      color: '',
      Icon: PeopleIcon,
      name: 'Course Instructors',
    },
    {
      backgroundColor: '#E1F7E3',
      color: '',
      Icon: CupIcon,
      name: 'Completed Courses',
    },
    {
      backgroundColor: '#FFF0F0',
      color: '',
      Icon: AvatarIcon,
      name: 'Students',
    },
    {
      backgroundColor: '#E1F7E3',
      color: '',
      Icon: CalendarIcon,
      name: 'Online Courses',
    },
    {
      backgroundColor: '#F5F7FA',
      color: '',
      Icon: CardIcon,
      name: 'USD Total Earning',
    },
    {
      backgroundColor: '#EBEBFF',
      color: '',
      Icon: StackIcon,
      name: 'Course Sold',
    },
  ];

  return (
    <div className="bg-gray-50 h-screen p-8 flex justify-center items-start pb-[100rem] ">
      <div className="w-[95%] flex flex-col items-center justify-start">
        <div className="w-full grid grid-cols-4 grid-rows-2 gap-5">
          {statsCard.map((item, index) => {
            return <StatsCard {...item} key={index} />;
          })}
        </div>
        <div className="w-full flex flex-col gap-[1.5rem] mt-8">
          <EditProfileProgress />
          <div className='w-full'>
          <RecentActivity/>
          <RevenueRechart/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
