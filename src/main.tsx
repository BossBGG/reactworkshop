import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx'; // ใช้ App ที่มีการตั้งค่า routing

// Render the App component inside StrictMode
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App /> {/* ให้ใช้ App ที่จัดการ routing */}
  </StrictMode>
);
