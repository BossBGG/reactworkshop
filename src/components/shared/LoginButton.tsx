import React, { useState } from "react";

interface LoginButtonProps {
  onLogin?: (username: string, password: string) => void;
  buttonText?: string;
  className?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  onLogin,
  buttonText = "Login",
  className = "",
}) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError("Please Enter a Username.");
      return;
    }
    
    if (!password) {
      setError("Please Enter a Password.");
      return;
    }
    
    if (onLogin) {
      onLogin(username, password);
    }
    
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <div className="w-full py-6 px-2">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your Username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <div className="mb-4">
          <label 
            className="block text-gray-700 text-sm font-bold mb-2" 
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        {error && (
          <div className="mb-4 text-red-500 text-sm">
            {error}
          </div>
        )}
        
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${className}`}
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginButton;