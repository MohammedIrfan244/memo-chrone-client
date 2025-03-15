"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FaEye ,FaEyeSlash } from "react-icons/fa";
import Link from 'next/link';

interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFormProps {
  onSubmit?: (data: RegisterFormValues) => void;
}

// Validation schema using Yup
const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'Username must be at least 4 characters')
    .matches(/^[a-z0-9_.-]+$/, 'Username cannot contain spaces or capital letters')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm password is required')
});

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (values: RegisterFormValues, { setSubmitting }: FormikHelpers<RegisterFormValues>) => {
    // Handle registration logic here
    if (onSubmit) {
      onSubmit(values);
    }
    setSubmitting(false);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/originals/71/1c/29/711c296fb6cf860caf4a3f60fbe1ecdd.png"
          alt="background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 backdrop-blur-md z-10"></div>
      
      <div className="z-20 bg-black/20 p-8 rounded-md border border-white/20 w-96 shadow-lg">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">Register</h2>
        
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-white text-sm mb-2">
                  Username
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className={`w-full bg-black/30 text-white border ${
                    errors.username && touched.username ? 'border-red-500' : 'border-gray-300/30'
                  } rounded-md py-2 px-4 focus:outline-none focus:border-transparent`}
                  placeholder="Enter username"
                />
                <ErrorMessage name="username" component="div" className="text-red-400 text-xs mt-1" />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-white text-sm mb-2">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full bg-black/30 text-white border ${
                    errors.email && touched.email ? 'border-red-500' : 'border-gray-300/30'
                  } rounded-md py-2 px-4 focus:outline-none focus:border-transparent`}
                  placeholder="Enter email address"
                />
                <ErrorMessage name="email" component="div" className="text-red-400 text-xs mt-1" />
              </div>
              
              <div className="mb-4">
                <label htmlFor="password" className="block text-white text-sm mb-2">
                  Password
                </label>
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className={`w-full bg-black/30 text-white border ${
                      errors.password && touched.password ? 'border-red-500' : 'border-gray-300/30'
                    } rounded-md py-2 px-4 pr-10 focus:outline-none focus:border-transparent`}
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                  >
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </button>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-400 text-xs mt-1" />
              </div>
              
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-white text-sm mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Field
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`w-full bg-black/30 text-white border ${
                      errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : 'border-gray-300/30'
                    } rounded-md py-2 px-4 pr-10 focus:outline-none focus:border-transparent`}
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                  >
                    {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </button>
                </div>
                <ErrorMessage name="confirmPassword" component="div" className="text-red-400 text-xs mt-1" />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-md transition duration-300 disabled:opacity-70"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
        
        <div className="mt-4 text-center">
          <p className="text-white/80 text-sm">
            Already have an account? <Link href="/auth/login" className="text-blue-400 underline hover:text-blue-300">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;