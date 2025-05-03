import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import routes from './routes'; // routes ที่คุณตั้งค่าในไฟล์ routes.ts
import BlogPage from './pages/Blog.page';
import BlogDetail from './pages/BlogDetail';
import LoginPage from './pages/LoginPage';
import AddProductPage from './pages/AddProductPage';
import { AuthStoreProvider } from './stores/AuthStore';
import { ProductStoreProvider } from './stores/ProductStore';
import FullPageLoader from './pages/LoadingPage';
import Navbar from './components/shared/Navbar';

function AppRoutes() {
  const element = useRoutes(routes);
  return (
    <Suspense fallback={<FullPageLoader/>}>
      {element}
    </Suspense>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthStoreProvider>
        <ProductStoreProvider>
          <Navbar/>
          <AppRoutes/>
        </ProductStoreProvider>
      </AuthStoreProvider>
    </BrowserRouter>
  );
}

export default App;