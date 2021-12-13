import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import withAuth from '../../utils/withAuth'
import { useSelector } from 'react-redux'

const Home = () => {

    const user = useSelector(state => state.currentUser)
    const { isAuth, loading, userData, error } = user;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>DEVcase</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container flex flex-col justify-center items-center min-h-screen">
                <h1 className="text-6xl md:text-9xl mt-10 font-black text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-purple-600">Welcome</h1>
                <h1 className="text-xl text-center font-black text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-purple-600">This page can only be accessible after login</h1>
                <img src="/Saly.svg" alt="" className="w-1/3" />
                {
                    userData.username ? <Link href={`/app/${userData.username}`}>
                        <button className="btn">Go to Profile</button>
                    </Link> : loading ? <button className="btn loading btn-ghost"></button> : error
                }
            </main>

        </div>
    )
}

export default withAuth(Home)
