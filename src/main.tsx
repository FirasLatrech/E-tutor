import { createRoot } from 'react-dom/client';
import App from './app/App';
import './styles.css';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
