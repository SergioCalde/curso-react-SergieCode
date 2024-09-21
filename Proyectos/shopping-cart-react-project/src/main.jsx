import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { CartApp } from './CartApp'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <CartApp />
    </StrictMode>,
  </BrowserRouter>

)
