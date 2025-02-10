import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from './store/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>

    </StoreProvider>
  </StrictMode>
);
