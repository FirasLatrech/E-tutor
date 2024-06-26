import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import GoogleAuthProvider from 'modules/auth/social-auth/google/google-auth-provider';
import AuthProvider from 'modules/auth/provider/AuthProvider';
import ModalProvider from 'modules/shared/providers/Modal/modal-provider';
import StoreProvider from 'modules/shared/providers/StoreProvider';
import './i18n';
import App from './app/App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HelmetProvider>
    <AuthProvider>
      <StoreProvider>
        <GoogleAuthProvider>
          <BrowserRouter>
            <Suspense>
              <ModalProvider>
                <App />
              </ModalProvider>
            </Suspense>
          </BrowserRouter>
        </GoogleAuthProvider>
      </StoreProvider>
    </AuthProvider>
  </HelmetProvider>
);
