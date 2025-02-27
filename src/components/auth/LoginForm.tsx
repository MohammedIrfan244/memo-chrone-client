"use client"
import React from 'react'
import { loginUser } from '@/lib/api'
import { ILoginForm } from '@/lib/type'


function LoginForm() {
    const [formData, setFormData] = React.useState<ILoginForm>({ username: '', password: '', email: '' })
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        loginUser(formData)
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="text" onChange={(e) => setFormData({ ...formData, username: e.target.value })} placeholder='username' />
                <input type="email" placeholder='email' onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <input type="password" placeholder='password' onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm
