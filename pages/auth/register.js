import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import firebase from '../../config/firebase'
import withoutAuth from '../../utils/withoutAuth'
import { useDispatch } from 'react-redux'
import updateUsername from '../../store/actions/profileActions'

const Register = () => {

    const router = useRouter()
    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false)
    const [type, setType] = useState("password")
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [cpassword, setCPassword] = useState()

    const passwordType = () => {
        if (showPassword === false) {
            setShowPassword(true)
            setType('text')
        } else {
            setShowPassword(false)
            setType('password')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== cpassword) return alert('Password Should Match')

        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                const updated = firebase.auth().currentUser;
                updated.sendEmailVerification()
                    .then(() => {
                        alert('Email Verification Sent!, Check your mail')
                        router.push('/auth')
                    })
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    const handleGithubLogin = async () => {
        await firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((user) => {
                message.success('Login Success 🎉')
                console.log(user)
                router.push('/app')
            }).catch((err) => {
                message.error(err.message)
            })
    }

    const handleGoogleLogin = async () => {
        await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((user) => {
                message.success('Login Success 🎉')
                console.log(user)
                router.push('/app')
            }).catch((err) => {
                message.error(err.message)
            })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Register - DEVcase</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col items-center justify-center rounded-xl md:shadow-2xl p-8 md:border border-gray-800">
                <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-purple-600">DEV<span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-600">case</span></h1>
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-purple-600 mt-6 text-center">Welcome!</h1>
                <p className="mb-6 text-gray-400">Built for coders, Built by coders</p>
                <p className="uppercase font-semibold my-3">Register</p>

                <button className="flex justify-center items-center btn btn-wide my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    &nbsp;Continue with GitHub
                </button>
                <button className="flex justify-center items-center btn btn-wide">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                    &nbsp;Continue with Google
                </button>

                <p className="my-3">OR</p>

                <form onSubmit={handleSubmit} className="w-full px-5">
                    <div className="form-control w-full">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="yourname@example.com" className="input dark:bg-primary border border-gray-400 dark:border-gray-800" required />
                    </div>
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
                    <div className="form-control w-full my-2">
                        <button className="btn btn-wide">Continue</button>
                    </div>
                </form>

                <p className="text-xs">Already Have An Account? <Link className="hover:underline cursor-pointer" href="/auth">Login</Link></p>

            </div>

        </div>
    )
}

export default withoutAuth(Register)
