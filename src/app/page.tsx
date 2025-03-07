"use client"
import React from 'react'
import RegisterForm from '@/components/auth/RegisterForm'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import { Home } from 'lucide-react'


function Page() {
  const { authUser }= useSelector((state:RootState) => state.authUser)
  return (
    <div>
    {authUser ? <Home/>:<RegisterForm/>}
    </div>
  )
}

export default Page
