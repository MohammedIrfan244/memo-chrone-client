"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import Home from '@/components/Home'
import LoginForm from '@/components/auth/LoginForm'

function Page() {
  const { authUser } = useSelector((state: RootState) => state.authUser)
  return (
    <div>
      {authUser ? <Home /> : <LoginForm />}
    </div>
  )
}

export default Page
