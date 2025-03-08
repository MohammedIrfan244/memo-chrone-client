"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IAuthResponse, ILoginForm } from "@/lib/types/login";
import { loginUser } from "@/lib/api";
import { Eye, EyeOff } from "lucide-react";

const image: string =
    "https://i.pinimg.com/736x/9a/b7/84/9ab784694cf576aa6c2446be8d17a15f.jpg";


function LoginForm() {
    const [loginForm, setLoginForm] = useState<ILoginForm>({
        identity: "",
        password: ""
    });
    const [error, setError] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        loginUser(loginForm)
        .then((data : string | IAuthResponse) => {
            if (typeof data === "string") {
                setError(data);
            } else {
                setError(data.message);
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("user", JSON.stringify(data.user));
            }
        })
        .catch((error)=>{
            setError(error)
        })
        .finally(()=>{
            setLoginForm({identity:"",password:""})
        })
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div
            className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
        >
            <form className="flex border w-80 h-auto flex-col justify-around items-center backdrop-blur-sm gap-4 p-6" onSubmit={handleLogin}>
                <h1 className="text-xl text-center font-bold text-white">Login</h1>
                <input
                    required
                    type="text"
                    placeholder="Email or Username"
                    className="w-3/4 p-2 text-sm bg-opacity-20 focus:outline-none bg-white placeholder:text-white"
                    value={loginForm.identity}
                    onChange={(e) => setLoginForm({ ...loginForm, identity: e.target.value })}
                />
                <div className="relative w-3/4">
                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full p-2 text-sm bg-opacity-20 focus:outline-none bg-white placeholder:text-white"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    />
                    <button 
                        type="button" 
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                </div>
                <button
                    type="submit"
                    className="w-3/4 p-2 bg-cherryRed text-white bg-opacity-45 hover:bg-opacity-70"
                >
                    Login
                </button>
                {error && <p className="text-red-500 text-xs">{error}</p>}
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