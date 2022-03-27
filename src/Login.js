import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"

function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
    return (
        <div className='flex flex-col items-center m-0 h-[200px] mt-[200px] '>
            <form className="space-y-12">
                <div>
                    <h1>Email</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" class="mt-1 px-6 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                </div>
                <div>
                    <h1>Password</h1>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" class="mt-1 px-6 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" placeholder="*****" />
                </div>
                <div className="px-6 py-2 bg-red-400 rounded-lg mt-4 text-center">
                    <button onClick={login}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login