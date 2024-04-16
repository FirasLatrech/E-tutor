import React from 'react';
import { SeparatorHorizontal } from 'lucide-react';
import busniess from 'modules/shared/assets/icons/categoryIcon/busniess.svg';
import finance from 'modules/shared/assets/icons/categoryIcon/finance&accounting.svg';
import it from 'modules/shared/assets/icons/categoryIcon/it&software.svg';
import label from 'modules/shared/assets/icons/categoryIcon/label.svg';
import Button from 'modules/shared/components/Button';
import { cn } from 'modules/shared/lib/utility';
import arrowLeft from '../_assets/icons/arrowLeft.svg';
import arrowRight from '../_assets/icons/arrowRight.svg';
import barber from '../_assets/images/image.png';
type Props = {};
const categories = [
  {
    label: 'Label',
    icon: label,
    bg: '#EBEBFF',
    color: '#FFFFFF',
    id: 1,
    cont: '63,476',
  },
  {
    label: 'Business',
    icon: busniess,
    bg: '#E1F7E3',
    color: '#FFFFFF',
    id: 2,
    cont: '63,476',
  },
  {
    label: 'Finance & Accounting',
    icon: finance,
    bg: '#FFF2E5',
    color: '#FFFFFF',
    cont: '63,476',
    id: 3,
  },
  {
    label: 'IT & Software',
    icon: it,
    bg: '#FFF0F0',
    color: '#FFFFFF',
    id: 4,
    cont: '63,476',
  },
];

export const Dashbord = (props: Props) => {
  return (
    <div className="flex flex-col pt-6 gap-y-6">
      <div className="text-xl font-[600]">Dashboard</div>
      <div className="grid grid-cols-4 gap-4" style={{ direction: 'ltr' }}>
        {categories.map(
          (category, index) => (
            console.log(category.bg),
            (
              <div
                key={index}
                className={cn(
                  'flex items-center justify-start gap-5 p-6 hover:shadow-md duration-300 min-w-[25%] cursor-pointer',
                  `bg-${category.bg}`
                )}
                style={{
                  backgroundColor: category.bg,
                }}
                // onClick={() => {
                //   navigate(`/category/${category.id}`);
                // }}
              >
                <div
                  className="bg-white w-[70px] h-[70px]   flex items-center justify-center"
                  style={{ backgroundColor: category.color }}
                >
                  <img src={category.icon} alt={category.label} />
                </div>

                <div className="flex flex-col justify-center">
                  <span className="text-gray-900">{category.label} </span>
                  <span className="text-gray-600">{category.cont} Courses</span>
                </div>
              </div>
            )
          )
        )}
      </div>
      <div className="text-xl font-[600] w-full flex justify-between">
        <div>Let’s start learning, Kevin</div>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex p-2 duration-300 cursor-pointer bg-primary-100 hover:opacity-50">
            <img src={arrowLeft} />
          </div>
          <div className="flex p-2 duration-300 cursor-pointer bg-primary-100 hover:opacity-50">
            <img src={arrowRight} />
          </div>
        </div>
      </div>

      <div className="w-[312px] border border-gray-100 flex flex-col shadow-sm">
        <img src={barber} alt="" />
        <div>
          <div className="flex flex-col p-2">
            {' '}
            <span className="text-gray-600 text-[14px] font-[300]">
              Reiki Level I, II and Master/Teacher Program
            </span>
            <span className="text-gray-900">1. Intorductions</span>
          </div>
          <SeparatorHorizontal size={1} className="w-full bg-gray-100" />
          <div className="flex items-center justify-between h-[46px] pt-8 pb-8 pl-2 pr-2">
            <Button
              text="Watch Lecture"
              variant="secondaryPrimary"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
