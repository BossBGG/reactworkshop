import React, { useEffect, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import BlogCard from "../components/shared/BlogCard";
import { blogs } from "../mockdata/data";
import { Link } from "react-router-dom";
import ProductCard from "../components/shared/ProductCard";

// Define the type for a Blog
interface BlogData {
  id: number;
  title: string;
  detail: string;
  imageUrl: string;
}

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState<BlogData[]>(blogs);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="w-full h-screen bg-sky-50">
     

      <div className="mt-8 text-4xl font-bold flex justify-center items-center text-purple-500">
        Blog List
        <FaRegMessage className="pl-4 pt-2 w-10 h-10" />
      </div>

      {/* Search Box */}
      <div className="flex justify-center items-center w-full h-[60px]">
        <div className="flex justify-center items-center mt-6 w-[600px] h-[50px] border-black border-2 rounded-2xl">
          <FaSearch className="ml-4 text-xl text-gray-600" />
          <input
            type="text"
            placeholder="Search Blog"
            className="w-full h-full px-4 border-none rounded-2xl focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Blog Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filteredBlogs.map((blog) => (
            <ProductCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>

   
  );
};

export default BlogPage;
