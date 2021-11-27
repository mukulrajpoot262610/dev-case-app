import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import firebase from '../../config/firebase'
import { useRouter } from 'next/router'

const ForgetPassword = () => {

    const router = useRouter()
    const [email, setEmail] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                alert('Check your Mail!')
            })
            .catch((err) => {
                alert(err.message)
            })
    }


    return (
        <div className="flex flex-col items-center justify-start min-h-screen py-2">
            <Head>
                <title>Forget Passowrd - DEVcase</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="flex flex-col justify-center items-center">
                    <img src="/Saly3.svg" alt="" className="h-full w-card" />
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-purple-600 my-6 text-center">Forget Password!</h1>
                </div>
                <form onSubmit={handleSubmit} className="w-full px-5 flex flex-col justify-center items-center">
                    <div className="form-control w-full">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="yourname@example.com" className="input dark:bg-primary border border-gray-400 dark:border-gray-800" required />
                    </div>
                    <div className="form-control w-full my-2 mb-6 flex justify-center items-center">
                        <button type="submit" className="btn btn-wide">Continue</button>
                    </div>
                </form>
            </main>

        </div>
    )
}

export default ForgetPassword
