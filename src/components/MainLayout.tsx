"use client";
import React from 'react'
import Navbar from './layout/Navbar';
import FooterSec from './layout/FooterSec';
import { usePathname } from 'next/navigation';


function MainLayout({children}:{children:React.ReactNode}) {
    const pathName=usePathname()
    const hideLayout=pathName==='/auth/login' || pathName==='/auth/register' || pathName==='/auth/forgot-password'
  return (
    <>
       {!hideLayout && <Navbar/>}
        {children}
        {!hideLayout && <FooterSec/>}
    </>
  )
}

export default MainLayout
