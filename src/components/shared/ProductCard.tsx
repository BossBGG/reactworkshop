import React from "react";
import { Link } from "react-router-dom";
import { BlogData } from "../../mockdata/data";

interface BlogCardProps {
  blog: BlogData;
}

const ProductCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}` }>
      <div className="bg-sky-600 w-[280px] h-[300px] rounded-2xl cursor-pointer overflow-hidden shadow-lg hover:scale-105 transition">
        <div className="flex flex-col items-center">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-sm font-bold text-white text-center">
            {blog.title}
          </div>
          <div className="px-4 pb-4 text-sm text-white text-center">
            {blog.detail}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
