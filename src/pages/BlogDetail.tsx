// BlogDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../mockdata/data"; // นำเข้าข้อมูลจาก mockdata

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
      const foundBlog = blogs.find((blog) => blog.id === parseInt(id)); // หา Blog ตาม id
      if (foundBlog) {
        setBlog(foundBlog); // ตั้งค่าบล็อกที่พบ
      }
    }
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>; // กรณีที่ยังไม่มีข้อมูล
  }

  return (
    <div className="w-full h-screen bg-sky-50">
      


      {/* ส่วนเนื้อหาที่จัดให้อยู่ตรงกลาง */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-center text-4xl font-bold mt-8">{blog.title}</div>
        
        {/* ใช้ mx-auto เพื่อให้อยู่ตรงกลางแนวนอน และกำหนดความกว้างเป็น fixed */}
        <div className="w-[30%] mx-auto mt-6">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-[350px] object-cover rounded-2xl"
          />
        </div>
        
        {/* ใช้ max-w ร่วมกับ mx-auto เพื่อกำหนดความกว้างสูงสุดและจัดให้อยู่ตรงกลาง */}
        <div className="p-6 max-w-3xl mx-auto text-center">
          <p className="text-xl">{blog.detail}</p>
        </div>
      </div>
    </div>
 
  );
};

export default BlogDetail;
