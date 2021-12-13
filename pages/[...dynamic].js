import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import firebase from '../config/firebase';
import EmailVerify from '../components/emailVerify';

const NewPassword = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [verified, setVerified] = useState(false)
    const [password, setPassword] = useState()
    const [cpassword, setCPassword] = useState()
    const [type, setType] = useState("password")


    const passwordType = () => {
        if (showPassword === false) {
            setShowPassword(true)
            setType('text')
        } else {
            setShowPassword(false)
            setType('password')
        }
    }

    const router = useRouter()

    const renderPage = async () => {
        if (router.query.mode === "verifyEmail") {
            return (
                await firebase.auth().applyActionCode(router.query.oobCode).then((res) => {
                    setVerified(true)
                }).catch((error) => {
                    alert(error.message)
                })
            )
        }
    }

    useEffect(() => {
        renderPage()
    }, [router])

    const handleSubmit = async (e) => {

        e.preventDefault()

        if (password !== cpassword) return alert('Password Should Match')

        if (router.query.mode === "resetPassword") {
            return (
                await firebase.auth().confirmPasswordReset(router.query.oobCode, password)
                    .then(res => {
                        alert('Password has been changed, you acn login now!')
                        router.push('/')
                    })
                    .catch(err => alert(err.message))
            )
        }
    }



    return (
        <div className=" flex flex-col items-center justify-start min-h-screen">
            <Head>
                <title></title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">
                {
                    router.query.mode === "verifyEmail" ? verified ? <EmailVerify /> : "Hello..." : router.query.mode === "resetPassword" ? (
                        <>
                            <div className="flex flex-col justify-center items-center">
                                <img src="/Saly2.svg" alt="" className="h-full w-card" />
                                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-purple-600 my-6 text-center">Password Reset!</h1>
                            </div>
                            <form onSubmit={handleSubmit} className="w-full px-5 flex flex-col justify-center items-center">
                                <div className="relative form-control w-full my-2">
                                    <input required type={type} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input dark:bg-primary border border-gray-400 dark:border-gray-800" />
                                    <h1 className="absolute right-4 cursor-pointer top-3">
                                        {
                                            showPassword ? <i className="fas fa-eye" onClick={passwordType}></i> : <i className="fas fa-eye-slash" onClick={passwordType}></i>
                                        }</h1>
                                </div>
                                <div className="relative form-control w-full my-2">
                                    <input required type={type} value={cpassword} onChange={(e) => setCPassword(e.target.value)} placeholder="confirm password" className="input dark:bg-primary border border-gray-400 dark:border-gray-800" />
                                    <h1 className="absolute right-4 cursor-pointer top-3">
                                        {
                                            showPassword ? <i className="fas fa-eye" onClick={passwordType}></i> : <i className="fas fa-eye-slash" onClick={passwordType}></i>
                                        }</h1>
                                </div>
                                <div className="form-control w-full my-2 mb-6 flex justify-center items-center">
                                    <button className="btn btn-wide">Continue</button>
                                </div>
                            </form>
                        </>
                    ) : "Loading..."
                }
            </main>
        </div>
    )
}

export default (NewPassword)
