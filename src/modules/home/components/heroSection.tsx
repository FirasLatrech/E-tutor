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
      <div className="flex items-center justify-center w-full max-2xl:w-full">
        {' '}
        <div className="flex flex-col items-start justify-center  pl-1  w-[600px] gap-10 max-md:gap-3 max-2xl:w-[80%] max-2xl:h-[500px]">
          <div>
            <h1 className="gray-900 text-[53px] max-md:text-[30px]   text-pretty   scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
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
      <img
        src={homeImage}
        alt=""
        width={800}
        className="-mt-1 max-2xl:hidden"
      />
    </main>
  );
}
