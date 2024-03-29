import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import App from './app/App';
import './styles.css';
import ModalProvider from 'modules/shared/providers/modal-provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <ModalProvider>
          
        <App />
         </ModalProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
