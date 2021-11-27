import React from 'react'
import Link from 'next/link'

const EmailVerify = () => {
    return (
        <div className="flex justify-start items-center flex-col">
            <img src="/Saly.svg" alt="" className="h-full w-card" />
            <h1 className=" text-3xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-purple-600 mt-6 text-center">Email Verified!</h1>
            <p className="my-6">You can login now.</p>
            <Link href="/auth">
                <button className="btn btn-wide mx-3 bg-gradient-to-br from-red-500 to-purple-600">Login</button>
            </Link>
        </div>
    )
}

export default EmailVerify
