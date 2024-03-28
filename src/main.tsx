import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import App from './app/App';
import './styles.css';
import StoreProvider from 'modules/shared/provider/StoreProvider';
import GoogleAuthProvider from 'modules/auth/social-auth/google/google-auth-provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HelmetProvider>
    <StoreProvider>
      <GoogleAuthProvider>
        <BrowserRouter>
          <Suspense>
            <App />
          </Suspense>
        </BrowserRouter>
      </GoogleAuthProvider>
    </StoreProvider>
  </HelmetProvider>
);
