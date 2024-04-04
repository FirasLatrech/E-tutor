import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import whiteLogo from 'modules/shared/assets/icons/logo/whiteLogo.svg';
import { cn } from 'modules/shared/lib/utility';
import useAuthStore from 'modules/shared/store/useAuthStore';
import ArrowRight from '../../assets/icons/arrow/arrowRight.svg';
import apple from '../../assets/icons/socialMediaIcon/apple.svg';
import facebook from '../../assets/icons/socialMediaIcon/facebook.svg';
import playstore from '../../assets/icons/socialMediaIcon/googleplay.svg';
import instagram from '../../assets/icons/socialMediaIcon/instagram.svg';
import linkedin from '../../assets/icons/socialMediaIcon/linkedin.svg';
import twitter from '../../assets/icons/socialMediaIcon/twitter.svg';
import youtube from '../../assets/icons/socialMediaIcon/youtube.svg';
import DropdownCurrency from '../dropdownCurrency';
import DropdownLanguage from '../dropdownlanguage';

const Footer = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore(
    (state) => state
  );

  const { t } = useTranslation('footer');
  const socialMedia = [
    {
      name: 'Facebook',
      icon: facebook,
    },
    {
      name: 'Instagram',
      icon: instagram,
    },
    {
      name: 'Linkedin',
      icon: linkedin,
    },
    {
      name: 'Twitter',
      icon: twitter,
    },
    {
      name: 'Youtube',
      icon: youtube,
    },
  ];
  const top_category = [
    t(`footer.development`),
    t(`footer.finance&accpunting`),
    t(`footer.design`),
    t(`footer.business`),
  ];
  const quick_links = [
    {
      name: t(`footer.about`),
      path: '/about',
    },
    {
      name: t(`footer.becomanInstructor`),
      path: '/instructor',
    },
    {
      name: t(`footer.contact`),
      path: '/contact',
    },
    {
      name: t(`footer.Career`),
      path: '/career',
    },
  ];

  const support = [
    {
      name: t(`footer.helpcenter`),
      path: '/help',
    },
    {
      name: t(`footer.faq`),
      path: '/help',
    },
    {
      name: t(`footer.terms&conditions`),
      path: '/terms',
    },
    {
      name: t(`footer.privacy`),
      path: '/privacy',
    },
  ];

  return (
    <nav className="bg-gray-900 shadow-lg h-[438px] flex items-center justify-between flex-col gap-6 w-full ">
      <div className="pl-6 pr-6 mx-auto h-[400px] flex items-center justify-between ">
        <div className="flex items-center justify-between space-x-36">
          <div className="flex flex-col items-start gap-6 justify-start space-x-4 w-[360px]">
            <img src={whiteLogo} alt="logo" />
            <span className="text-sm text-gray-500">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
              mattis odio at.
            </span>
            <div className="flex gap-4 ">
              {socialMedia.map((social,index) => (
                <Link
                  key={`socialMedia${index}`}
                  to={'#'}
                  className="bg-[#363B4766] w-[50px] h-[50px]  hover:bg-primary-600 duration-500 flex items-center justify-center "
                >
                  <img src={social.icon} alt={social.name} className="" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-6">
              <span className="text-sm text-white">
                {' '}
                {t(`footer.top4Category`)}
              </span>
              <div className="flex flex-col gap-2 ">
                {top_category.map((category, index) => (
                  <Link
                    key={`category${index}`}
                    to={'#'}
                    className="group text-sm h-[36px] text-gray-500 duration-500 hover:text-white hover:border-b-[1px] hover:border-primary-500 flex items-center justify-between"
                  >
                    <span className="!opacity-100">{category}</span>
                    <img
                      src={ArrowRight}
                      alt="arrowRight"
                      className="duration-500 opacity-0 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-sm text-white">
                {' '}
                {t(`footer.quicklinks`)}
              </span>
              <div className="flex flex-col gap-2 ">
                {quick_links.map((link, index) => (
                  <Link
                    key={`link${index}`}
                    to={link.path}
                    className="group text-sm h-[36px] text-gray-500 duration-500 hover:text-white hover:border-b-[1px] hover:border-primary-500 flex items-center justify-between"
                  >
                    <span className="!opacity-100">{link.name}</span>
                    <img
                      src={ArrowRight}
                      alt="arrowRight"
                      className="duration-500 opacity-0 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-sm text-white"> {t(`footer.support`)}</span>
              <div className="flex flex-col gap-2 ">
                {support.map((suport, index) => (
                  <Link
                    key={`support${index}`}
                    to={suport.path}
                    className="group text-sm h-[36px] text-gray-500 duration-500 hover:text-white hover:border-b-[1px] hover:border-primary-500 flex items-center justify-between"
                  >
                    <span className="!opacity-100">{suport.name}</span>
                    <img
                      src={ArrowRight}
                      alt="arrowRight"
                      className="duration-500 opacity-0 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-sm text-white">
                {' '}
                {t(`footer.downloadapp`)}
              </span>
              <div className="flex flex-col gap-2 ">
                <div className="flex flex-col gap-6">
                  <div className="bg-[#363B4766] p-3 pl-5 pr-5 cursor-pointer flex  items-center gap-3">
                    <img src={apple} alt="apple" />{' '}
                    <div className="flex flex-col gap-1 text-white">
                      <span className="text-xs text-gray-300">
                        {t(`footer.downloadnow`)}
                      </span>
                      <span>{t(`footer.appstore`)}</span>
                    </div>
                  </div>
                  <div className="bg-[#363B4766] p-3 pl-5 pr-5 cursor-pointer flex  items-center gap-3">
                    <img src={playstore} alt="apple" />{' '}
                    <div className="flex flex-col gap-1 text-white">
                      <span className="text-xs text-gray-300">
                        {t(`footer.downloadnow`)}
                      </span>
                      <span>{t(`footer.playstore`)}</span>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t-[1px] border-gray-600 w-full h-[110px] text-[#8C94A3] flex items-center ">
        <div className="flex items-center justify-center w-full gap-[500px]">
          <div>
            © {new Date().getFullYear()} - {t(`footer.softylines`)}.{' '}
            {t('footer.Desginedby')}{' '}
            <span className="text-white">Firas Latrach</span>.{' '}
            {t('footer.allrightsreserved')}
          </div>
          <div className="border-[1px] border-gray-800 p-2 ">
            <DropdownLanguage />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
