"use client";
import React from "react";
import Link from "next/link";

const image: string =
  "https://i.pinimg.com/736x/9a/b7/84/9ab784694cf576aa6c2446be8d17a15f.jpg";

function LoginForm() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <form className="flex border w-80 h-96 flex-col justify-around items-center backdrop-blur-sm p-6">
        <h1 className="text-xl text-center font-bold text-white">Login</h1>
        <input
          type="email"
          placeholder="Email or Username"
          className="w-3/4 p-2 text-sm bg-opacity-20 bg-white placeholder:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-3/4 p-2 text-sm bg-opacity-20 bg-white placeholder:text-white"
        />
        <button
          type="submit"
          className="w-3/4 p-2 bg-cherryRed text-white bg-opacity-45 hover:bg-opacity-70"
        >
          Login
        </button>
        <p className="text-white text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
