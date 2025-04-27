import { RouteObject } from 'react-router-dom';
import BlogPage from '../pages/Blog.page.tsx';
import BlogDetail from '../pages/BlogDetail.tsx'; // เพิ่ม BlogDetail เพื่อแสดงรายละเอียดบล็อก

const routes: RouteObject[] = [
  {
    path: '/', // เส้นทางหลัก
    element: <BlogPage />, // หน้าบล็อกหลัก
  },
  {
    path: '/blog/:id', // เส้นทางสำหรับดูรายละเอียดบล็อก
    element: <BlogDetail />, // หน้ารายละเอียดบล็อก
  },
];

export default routes;
