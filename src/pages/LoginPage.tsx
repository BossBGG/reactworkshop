import React from "react";
import LoginButton from "../components/shared/LoginButton";

const LoginPage = () => {

  const handleLogin = (username: string, password: string) => {
    console.log("Login with:", username, password);
    localStorage.setItem("user",username);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-blue-600">
      <div className="w-[30%] h-[55%] bg-white rounded-3xl">
        <div className="flex flex-col justify-content-center items-center">
          <h2 className="text-purple-700 text-3xl mt-4">Welcome to Shop</h2>

         <LoginButton
           onLogin={handleLogin}
           buttonText="Login"
           className="mt-4 w-full" 
         />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
