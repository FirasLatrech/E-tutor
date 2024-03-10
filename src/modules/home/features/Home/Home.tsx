import Footer from 'modules/shared/components/Fotter/Footer';
import Header from 'modules/shared/components/Header';
import UnderHeader from 'modules/shared/components/underHeader';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { i18n } = useTranslation('translation');
  // console.log(i18n);
  document.body.dir = i18n?.dir();

  return (
    // <div className="flex items-center justify-center h-screen">
    <div className="flex flex-col h-full">hello</div>
  );
};

export default Home;
