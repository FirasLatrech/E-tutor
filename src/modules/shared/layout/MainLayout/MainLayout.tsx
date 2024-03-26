import { useTranslation } from 'react-i18next';
import Footer from 'modules/shared/components/Fotter/Footer';
import Header from 'modules/shared/components/Header';
import UnderHeader from 'modules/shared/components/underHeader';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col">
      <Header />

      <UnderHeader />
      {children}

      <Footer />
    </div>
  );
};

export default MainLayout;
