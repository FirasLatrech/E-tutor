import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { MoveLeft, MoveRight } from 'lucide-react';
import busniess from 'modules/shared/assets/icons/categoryIcon/busniess.svg';
import finance from 'modules/shared/assets/icons/categoryIcon/finance&accounting.svg';
import it from 'modules/shared/assets/icons/categoryIcon/it&software.svg';
import label from 'modules/shared/assets/icons/categoryIcon/label.svg';
import personaldevelopment from 'modules/shared/assets/icons/categoryIcon/personaldevelopment.svg';
import Footer from 'modules/shared/components/Fotter/Footer';
import Header from 'modules/shared/components/Header';
import UnderHeader from 'modules/shared/components/underHeader';
import { cn } from 'modules/shared/lib/utility';
import { getAllCategory } from '../data/api/home.service';
import { useAllCategory } from '../data/queries/home.query';
import { Skeleton } from 'modules/shared/components/ui/skeleton';

type Category = {
  id: number;
  name: string;
  color: string;
  icon: string;
  create_by: number;
  background_color: string;
  courses_count: number;
  createdAt: string;
  deletedAt: string | null;
};
export default function TopCategory() {
  const { status, data, error, isPending } = useAllCategory();
  console.log(data)

  const { t, i18n } = useTranslation('home');

  console.log(i18n.language);
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
    {
      label: 'Marketing',
      icon: it,
      bg: '#FFF0F0',
      color: '#FFFFFF',
      id: 5,
      cont: '63,476',
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="bg-white h-[680px] flex flex-col items-center justify-center gap-10">
      <h1 className="text-[900] font-[600] text-[40px]">
        {t('home.browsetopcategory')}
      </h1>

      <div className="w-[80%] mx-auto">
        {/* category image  */}
        {false ? (
          <div className="grid grid-cols-4 gap-4">
            <Skeleton className="w-[320px] h-[110px] " />
            <Skeleton className="w-[320px] h-[110px] " />
            <Skeleton className="w-[320px] h-[110px] " />
            <Skeleton className="w-[320px] h-[110px] " />
            <Skeleton className="w-[320px] h-[110px] " />
            <Skeleton className="w-[320px] h-[110px] " />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4" style={{ direction: 'ltr' }}>
            {data &&
              data?.map((category: Category, index: number) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-center justify-start gap-5 p-6 hover:shadow-md duration-300 min-w-[25%] cursor-pointer',
                    `bg-${category.color}`
                  )}
                  style={{
                    backgroundColor: category.background_color,
                  }}
                  onClick={() => {
                    navigate(`/category/${category.id}`);
                  }}
                >
                  <div
                    className="bg-white w-[70px] h-[70px]   flex items-center justify-center"
                    style={{ backgroundColor: category.color }}
                  >
                    <img src={finance} />
                  </div>

                  <div className="flex flex-col justify-center">
                    <span className="text-gray-900">{category.name} </span>
                    <span className="text-courses_countgray-600">
                      {category.courses_count} Courses
                    </span>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="flex justify-center gap-2 ">
        <p className="text-gray-700 cursor-pointer">
          {t('home.wehavemorecategory')}
        </p>
        <p className="flex gap-3 text-primary-500 ">
          {t('home.browseall')}{' '}
          {i18n.language === 'ar' ? (
            <MoveLeft
              fill="#FF6636"
              color="#FF6636"
              className="duration-300 cursor-pointer hover:animate-out hover:rotate-x-30"
            />
          ) : (
            <MoveRight
              fill="#FF6636"
              color="#FF6636"
              className="duration-300 cursor-pointer hover:animate-out hover:rotate-x-30"
            />
          )}
        </p>
      </div>
    </div>
  );
}
