import React, { useState } from 'react'

export default function Login({ handleLogin }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");

    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 rounded-2xl p-20'>
                <form onSubmit={(e) => {
                    submitHandler(e)

                }
                } className='flex flex-col items-center justify-center'>
                    <input required className='border-2 outline-none bg-transparent border-emerald-600 py-4 px-5 text-xl  rounded-full placeholder:text-white'
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder='Enter your email' />
                    <input required className='border-2 outline-none bg-transparent border-emerald-600 py-4 px-5 text-xl rounded-full mt-4 placeholder:text-white'
                        type="password"
                        value={password}
                        placeholder='Enter your password'
                        onChange={(e) => { setPassword(e.target.value) }} />
                    <button className='outline-none bg-emerald-600 py-3 px-5 text-xl rounded-full mt-4 placeholder:text-white' >Log In</button>
                </form>

            </div>
        </div>
    )
}
