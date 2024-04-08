import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'modules/shared/components/ui/toaster';
import routes, { renderRoutes } from '../modules/shared/routes';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';
import GoogleAuthProvider from 'modules/auth/social-auth/google/google-auth-provider';
import Grafana from 'grafana';

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
            <Grafana/>
              {renderRoutes(routes)}
          </div>
        </Suspense>
        <Toaster />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
