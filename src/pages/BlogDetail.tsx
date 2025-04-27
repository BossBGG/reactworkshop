// BlogDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../mockdata/data'; // นำเข้าข้อมูลจาก mockdata

// Define the type for a Blog
interface BlogData {
  id: number;
  title: string;
  detail: string;
  imageUrl: string;
}

const BlogDetail = () => {
  const { id } = useParams(); // ดึง id จาก URL
  const [blog, setBlog] = useState<BlogData | null>(null); // ตั้งค่า state เป็น BlogData หรือ null

  useEffect(() => {
    if (id) {
      const foundBlog = blogs.find(blog => blog.id === parseInt(id)); // หา Blog ตาม id
      if (foundBlog) {
        setBlog(foundBlog); // ตั้งค่าบล็อกที่พบ
      }
    }
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>; // กรณีที่ยังไม่มีข้อมูล
  }

  return (
    <div className='w-full h-screen bg-sky-50'>
      <div className='flex justify-between items-center h-[60px] w-full px-6 bg-blue-200 text-black'>
        <div className='bg-white w-[60px] h-[40px] flex justify-center items-center text-xl p-1 rounded-2xl'>
          Logo
        </div>
      </div>

      <div className="text-center text-4xl font-bold mt-8">{blog.title}</div>
      <img src={blog.imageUrl} alt={blog.title} className="w-full h-[400px] object-cover mt-6 rounded-2xl"/>
      <div className="p-6">
        <p className="text-xl">{blog.detail}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
