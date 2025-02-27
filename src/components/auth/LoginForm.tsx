"use client"
import React from 'react'
import { loginUser } from '@/lib/api'
import { ILoginForm } from '@/lib/type'


function LoginForm() {
    const [formData, setFormData] = React.useState<ILoginForm>({ identity: '', password: '' })
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        loginUser(formData)
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="text" onChange={(e) => setFormData({ ...formData, identity: e.target.value })} placeholder='username or email' />
                <input type="password" placeholder='password' onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm
