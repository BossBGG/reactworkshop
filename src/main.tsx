import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // ตรวจสอบว่าไฟล์นี้มีอยู่จริง
import App from './App';

// ใช้ ! เพื่อบอก TypeScript ว่าเราแน่ใจว่า element นี้มีอยู่
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);