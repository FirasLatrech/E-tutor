import React from 'react';
import { useTranslation } from 'react-i18next';
import homeImage from 'modules/shared/assets/images/home.png';
import Button from 'modules/shared/components/Button';
export default function HeroSection() {
  const { t } = useTranslation('home');
  console.log(t('home.button'));
  return (
    <main
      className="flex items-center justify-between w-full bg-[#fdfdfe]"
      style={{ direction: 'ltr' }}
    >
      <div className="flex items-center justify-end w-full ">
        {' '}
        <div className="flex flex-col items-start justify-center  pl-1  w-[600px] gap-10">
          <div>
            <h1 className="gray-900 text-[53px]   text-pretty   scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {t('home.header')}
            </h1>
          </div>
          <p className="text-xl font-[300] text-gray-700 leading-7 [&:not(:first-child)]:mt-6">
            {t('home.paragraph')}
          </p>
          <Button
            size="lg"
            text={t('home.button')}
            type="button"
            value="primary"
          />
        </div>
      </div>
      <img src={homeImage} alt="" width={800} className="-mt-1" />
    </main>
  );
}
