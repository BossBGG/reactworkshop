import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './routes'; // routes ที่คุณตั้งค่าในไฟล์ routes.ts

function App() {
  const element = useRoutes(routes); // ใช้ useRoutes เพื่อให้แอปพลิเคชันทำงานกับ routing

  return (
    <BrowserRouter>
      {element} 
    </BrowserRouter>
  );
}

export default App;
