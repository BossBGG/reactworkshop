import React from 'react';
import { user } from "../../mockdata/data"; // import user data

const Profile = () => {
  // กำหนดสถานะจาก user (เช่น online หรือ offline)
  const status = user[0].status ? 'online' : 'offline';
  
  return (
    <div className='relative mt-4 lg:ml-88 ms:flex-col justify-center border-black p-8 lg:w-[1140px] lg:h-[450px] md:w-[800px] md:h-[380px] bg-gray-400 rounded-3xl border-b-4'>
      {/* Profile Title */}
      <div className="mb-6">
        <h1 className='text-2xl font-bold'>MyProfile</h1>
      </div>

      {/* Content Section */}
      <div className='flex flex-col lg:flex-row md:flex-row'>
        {/* image */}
        <div className="lg:w-[600px] md:w-[400px] sm:w-[400px]">
          <img
            src={user[0].image}  
            alt="Profile"
            className='lg:w-[440px] lg:h-[280px] md:w-[400px] md:h-[280px] sm:w-[400px] sm:h-[360px] sm:mt-6 rounded-2xl'
          />
        </div>

        {/* description */}
        <div className='p-4 ml-8 mt-8 lg:mt-0'>
          {/* name */}
          <h3 className='text-4xl font-bold'>
            {user[0].username}  {/* ใช้ข้อมูลชื่อจาก user */}
          </h3>
          
          {/* email */}
          <div className='text-white mt-1'>
            {user[0].email}  {/* ใช้ข้อมูลอีเมลจาก user */}
          </div>
          
          {/* description */}
          <div className='text-white mt-2'>
            {user[0].des}  {/* ใช้ข้อมูลคำบรรยายจาก user */}
          </div>
          
          {/* status */}
          <div className='flex items-center mt-4'>
            <div
              className={`w-3 h-3 rounded-full ${status === 'online' ? 'bg-green-500' : 'bg-red-500'} mr-2`}
            ></div>
            <span className={`text-${status === 'online' ? 'green' : 'red'}-500 font-bold`}>
              {status === 'online' ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
