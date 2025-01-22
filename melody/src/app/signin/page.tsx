'use client'

import React, { useState } from "react";
import signIn from "@/firebase/auth/signin";
import { signInWithGoogle } from '@/firebase/auth/googleSignIn';
import { useRouter } from 'next/navigation';


function Page() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { result, error } = await signIn(email, password);

        if (error) {
            console.error(error);
            return;
        }

        // else successful
        console.log(result);
        router.push("/admin");
    };

    const handleGoogleSignIn = async () => {
        try {
            const user = await signInWithGoogle();
            console.log('User successfully signed in:', user);
        } catch (error) {
            console.error('Google Sign-In error:', error.message);
        }
    };

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1 className="mt-60 mb-30">Sign in</h1>
                <button onClick={handleGoogleSignIn}>
                    Sign in with Google
                </button>
                <form onSubmit={handleForm} className="form">
                    <label htmlFor="email">
                        <p>Email</p>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@mail.com"
                        />
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                        />
                    </label>
                    <button type="submit">Sign in</button>
                </form>
            </div>
        </div>
    );
}

export default Page;
