import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/UseAuthHook";

function Navbar () {
  const {isAuthenticated, logout} = useAuth();

  return (
    <nav className="flex justify-between items-center h-[60px] w-full px-6 bg-blue-200 text-black">
      <div className="bg-white w-[60px] h-[40px] flex justify-center items-center text-xl p-1 rounded-2xl">
        Logo
      </div>

      <div className="flex items-center space-x-6">
        <Link to={"/"}>
          <div className=" text-gray-700 font-medium ">Home</div>
        </Link>
        <Link to={"/"}>
          <div className=" text-gray-700 font-medium">Product</div>
        </Link>
        <Link to={"/addproduct"}>
          <div className=" text-gray-700 font-medium ">AddProduct</div>
        </Link>
        {!isAuthenticated ? (
            <Link to={"/login"}>
            <div className="bg-white w-[80px] h-[40px] flex justify-center items-center text-xl p-2 rounded-xl">
              Login
            </div>
          </Link>
        ) : (
            <button
            onClick={logout}
            className="bg-white w-[80px] h-[40px] flex justify-center items-center text-xl p-2 rounded-xl"
            >
                Logout
            </button>
        )

        }
        
      </div>
    </nav>
  );
};

export default Navbar;
