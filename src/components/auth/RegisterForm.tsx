"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "@/lib/api";

const image: string =
  "https://i.pinimg.com/736x/9a/b7/84/9ab784694cf576aa6c2446be8d17a15f.jpg";

const RegisterForm = () => {
  const [error,setError]=useState<string>("")
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, "Username must be at least 4 characters")
        .matches(/^[a-z]+$/, "Only lowercase letters allowed")
        .matches(/^\S+$/, "No spaces allowed")
        .required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      registerUser(values)
      .then((message) => {
        setError(message);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        formik.resetForm();
        });
    },
  });

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="flex border w-80 h-auto flex-col justify-around items-center backdrop-blur-sm p-6 gap-4"
      >
        <h1 className="text-xl text-center font-bold text-white">Sign Up</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-3/4 p-2 text-sm bg-opacity-20 bg-white placeholder:text-white"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && (
          <p className="text-red-500 text-xs w-3/4">{formik.errors.username}</p>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-3/4 p-2 text-sm bg-opacity-20 bg-white placeholder:text-white"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-xs w-3/4">{formik.errors.email}</p>
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-3/4 p-2 text-sm bg-opacity-20 bg-white placeholder:text-white"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-xs w-3/4">{formik.errors.password}</p>
        )}
        <button
          type="submit"
          className="w-3/4 p-2 bg-cherryRed text-white bg-opacity-45 hover:bg-opacity-70"
        >
          Sign Up
        </button>
        {error && <p className="text-red-500 text-xs w-3/4">{error}</p>}
        <p className="text-white text-sm">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
