import React from 'react';
import { SeparatorHorizontal } from 'lucide-react';
import staricon from 'modules/shared/assets/icons/bestSelling/star.svg';
import barber from 'modules/shared/assets/images/instructorImage/image.png';
import { useGetInstructorByCategoryId } from '../data/queries/home.query';
interface categoryDetails {
  name: string;
}
export default function PopularInstructor({
  id,
  categoryDetails,
}: {
  id: string;
  categoryDetails: categoryDetails;
}) {
  const { data } = useGetInstructorByCategoryId(id);
  console.log(data);

  console.log(id);
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-[82%] h-[520px] items-center flex justify-center flex-col gap-10">
        <h3 className="text-4xl font-semibold tracking-tight scroll-m-20">
          Popular instructor in {categoryDetails?.name}
        </h3>
        <div>
          {data?.map((item: any, index: number) => (
            <div className="w-[244px] border" key={index}>
              <div className="w-[244px] h-[200px] overflow-hidden object-cover">
                <img src={item?.photo?.path} alt="" className="object-cover " />
              </div>
              <div className="flex flex-col items-center">
                {' '}
                <span>
                  {item?.username} {item?.lastName}
                </span>
                <span className="text-gray-500">Senior Developer</span>
              </div>
              <SeparatorHorizontal size={1} className="w-full bg-gray-100" />
              <div className="flex items-center justify-between pt-2 h-[46px] p-2">
                <div className="flex items-center gap-1 ">
                  <img src={staricon} alt="staricon" width={20} />
                  <span>5.0</span>
                </div>
                <div>
                  <span className="text-gray-700">
                    {item.totalEnrolmentCount}
                  </span>
                  <span className="text-gray-500"> students</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
