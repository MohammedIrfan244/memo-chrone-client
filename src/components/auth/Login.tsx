"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface LoginFormProps {
  onSubmit?: (data: { username: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-screen">

      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/originals/71/1c/29/711c296fb6cf860caf4a3f60fbe1ecdd.png"
          alt="background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="absolute inset-0 backdrop-blur-md z-10"></div>

      <div className="z-20 bg-black/20 p-8 rounded-lg border border-white/20 w-96 shadow-lg">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-white text-sm mb-2">
              Username / Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full bg-black/30 text-white border border-gray-300/30 rounded-lg py-2 px-4 focus:outline-none focus:border-transparent"
              placeholder="Enter your username or email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-white text-sm mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-black/30 text-white border border-gray-300/30 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:border-transparent"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-white/80 text-sm">
            Don&apos;t have an account? <a href="/auth/register" className="text-blue-400 underline hover:text-blue-300">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;