import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import routes, { renderRoutes } from '../modules/shared/routes';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Toaster } from 'modules/shared/components/ui/toaster';


function App() {
  const queryClient = new QueryClient();
  const { i18n } = useTranslation('translation');
  // console.log(i18n);
  document.body.dir = i18n?.dir();

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Suspense>
          <div className="h-screen ">
            {/* <Router /> */}

            {renderRoutes(routes)}
          </div>
        </Suspense>
        <Toaster />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
