import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });

    }
    return (
        <div className='flex flex-col items-center m-0 h-[200px] mt-[200px] '>
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
        </div>
    )
}

export default Login