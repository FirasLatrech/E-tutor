import React from 'react';
import { useTranslation } from 'react-i18next';
import { MoveLeft, MoveRight, SeparatorHorizontal } from 'lucide-react';
import staricon from 'modules/shared/assets/icons/bestSelling/star.svg';
import instructor from 'modules/shared/assets/images/becomeAnInstructor/imag.png';
import googleLogo from 'modules/shared/assets/images/companies/google.svg';
import lenovoLogo from 'modules/shared/assets/images/companies/lenovo.svg';
import slackLogo from 'modules/shared/assets/images/companies/slack.svg';
import verisonLogo from 'modules/shared/assets/images/companies/verison.svg';
import youtubeLogo from 'modules/shared/assets/images/companies/youtube.svg';
import barber from 'modules/shared/assets/images/instructorImage/image.png';
import { useTopInstructorForMonth } from '../data/queries/home.query';

export default function BecomeAnInstructor() {
  const { data, error, isPending } = useTopInstructorForMonth();
  console.log(data);
  const { t, i18n } = useTranslation('home');
  const companies = [
    {
      logo: slackLogo,
    },
    {
      logo: googleLogo,
    },
    {
      logo: youtubeLogo,
    },
    {
      logo: lenovoLogo,
    },
    {
      logo: verisonLogo,
    },
  ];
  return (
    <div className="w-full bg-gray-50">
      <div className="w-[90%] mx-auto pb-5 h-[400px] max-2xl:h-full max-2xl:flex-col flex items-center justify-between  gap-10">
        <div className="bg-[#FF6636] text-white w-[55%] max-2xl:w-full flex ">
          <div className="flex flex-col gap-6 p-5">
            <span className="text-[40px]">{t('home.Becomeaninstructor')}</span>
            <span className="font-[300] text-sm w-[440px]">
              {t('home.becomeaninstructorparagraph')}
            </span>
            <div className="flex items-center justify-center gap-2 w-[230px] h-[60px] bg-white text-primary-500 font-bold">
              {t('home.startteaching')}{' '}
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
            </div>
          </div>
          <div className="relative ">
            {/* <img src={instructor} alt="" width={510} height={300} /> */}
          </div>
        </div>
        <div className="w-[50%] max-2xl:w-full bg-white text-gray-900 h-[271px] max-2xl:h-full p-5 flex flex-col gap-5">
          <span className="text-[32px] font-[400]">
            {t('home.yourteaching&earning')}
          </span>
          <div className="overflow-auto ">
            <div className="flex flex-col items-start gap-6 min-w-[300px] overflow-auto ">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center min-w-[60px] min-h-[60px] rounded-full bg-secondary-100 font-[700] text-secondary-500 text-[25px]">
                    1{' '}
                  </span>
                  <span className="text-[19px] text-gray-900 font-[400]">
                    {' '}
                    {t('home.apptobecomeinstructor')}{' '}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center min-w-[60px] min-h-[60px] rounded-full bg-[#FFF0F0] font-[700] text-[25px] text-primary-500">
                    2{' '}
                  </span>
                  <span className="text-[19px] text-gray-900 font-[400]">
                    {' '}
                    {t('home.build&edityourprofile')}{' '}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center min-w-[60px] min-h-[60px] rounded-full bg-[#FFF0F0] font-[700] text-[25px] text-primary-500">
                    3{' '}
                  </span>
                  <span className="text-[19px] text-gray-900 font-[400]">
                    {' '}
                    {t('home.createyournewcourse')}{' '}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="flex items-center justify-center min-w-[60px] min-h-[60px] rounded-full bg-success-100 font-[700] text-[25px] 
                text-success-500"
                  >
                    4{' '}
                  </span>
                  <span className="text-[19px] text-gray-900 font-[400]">
                    {' '}
                    {t('home.startteaching&earning')}{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className=" bg-white w-[90%] p-10 flex flex-col gap-10  ">
          <h1 className="text-[32px] max-md:text-[20px] text-center font-[500]">
            {t('home.topinstructorformonth')}
          </h1>
          <div className="overflow-hidden">
            <div className="grid grid-cols-5 overflow-auto">
              {data &&
                data?.map((item: any, index: number) => {
                  const getCountOfTotalEnrollment = (
                    my_courses: Array<{
                      enrollmentCount: number;
                    }>
                  ) => {
                    let totalEnrollment = 0;
                    my_courses.forEach((course) => {
                      totalEnrollment += course?.enrollmentCount;
                    });
                    return totalEnrollment;
                  };

                  return (
                    <div className="min-w-[244px] border " key={index}>
                      <div className=" h-[220px] overflow-hidden">
                        <img
                          src={item?.photo?.path}
                          alt=""
                          className="object-cover w-full h-full duration-300 hover:scale-125"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        {' '}
                        <span>
                          {item.firstName} {item?.lastName}
                        </span>
                        <span className="text-gray-500">Senior Developer</span>
                      </div>
                      <SeparatorHorizontal
                        size={1}
                        className="w-full bg-gray-100"
                      />
                      <div className="flex items-center justify-between pt-2 h-[46px] p-2">
                        <div className="flex items-center gap-1 ">
                          <img src={staricon} alt="staricon" width={20} />
                          <span>5.0</span>
                        </div>
                        <div>
                          <span className="text-gray-700">
                            {getCountOfTotalEnrollment(item.my_courses)}
                          </span>
                          <span className="text-gray-500"> students</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <h1 className="flex items-center justify-center text-center text-gray-600 max-md:text-sm">
            {t('home.topinstructorformonthparagraph')}{' '}
            <p className="flex gap-3 cursor-pointer text-primary-500 ">
              {t('home.Becomeaninstructor')}{' '}
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
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10 mt-10 mb-10 max-xl:flex-col">
        <div className="flex flex-col items-center gap-8 ">
          <span className="text-[32px] max-md:text-[20px] text-gray-900">
            6.3{t('home.k')} {t('home.trustedcompanies')}
          </span>
          <span className="w-[350px] text-gray-500 text-sm max-md:text-xs max-md:pl-2">
            {t('home.trustedcompaniesparagraph')}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-5 pl-6 pr-6 max-xl:flex max-xl:flex-wrap ">
          {companies.map((company, index) => (
            <div
              className="h-[100px] w-[200px] flex items-center justify-center bg-white"
              key={index}
            >
              <img
                key={index}
                src={company.logo}
                alt=""
                width={100}
                height={100}
                className="duration-300 cursor-pointer hover:scale-125"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
