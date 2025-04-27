import React from 'react'
import { Link } from 'react-router-dom'
import { BlogData } from '../../mockdata/data';

interface BlogCardProps {
  blog: BlogData;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className='flex justify-center items-center mt-6 w-full h-[60%] bg-sky-200 px-10 py-10'>
      {/* ใช้ Link สำหรับการเปลี่ยนหน้า */}
      <Link to={`/blog/${blog.id}`} className="w-full">
        <div className='bg-sky-600 w-[70%] h-[50%] rounded-2xl cursor-pointer'>
          <div>
            <div className='p-4 text-3xl font-bold text-white'>
              {blog.title}
            </div>
            <div className='flex justify-between px-4'>
              <div className='text-white'>
                {blog.detail}
              </div>
              <img src={blog.imageUrl} alt={blog.title} className="w-40 h-40 object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard;
