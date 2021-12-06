import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Profile = () => {

    const router = useRouter();
    const [error, setError] = useState("Loading...");
    const [githubData, setGithubData] = useState();
    const user = useSelector(state => state.currentUser)
    const { userData, loading, isAuth } = user;

    console.log(githubData)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.github.com/users/${userData.username}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const data = await res.json()

            if (res.status === 403) {
                setError(data.message.split(".")[0])
            } else {
                setGithubData(data)
            }

        }

        // userData && fetchData()
    }, [userData])

    return (
        <div className=" flex flex-col items-center justify-start min-h-screen">
            <Head>
                <title>{githubData && githubData.name} | {router.query.username}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {
                githubData ? (
                    <main className="w-full flex flex-col items-center min-h-screen">
                        <div className="bg-gray-600 w-full h-96"></div>
                        <main className="relative container min-h-screen px-20">
                            <div className="flex justify-between w-full items-start bg-red-600">
                                <div className="avatar absolute -top-28">
                                    <div className="mb-8 w-60 h-60 mask mask-squircle">
                                        <img src={githubData.avatar_url} />
                                    </div>
                                </div>
                                <div className="absolute right-16 my-6">
                                    <button className="btn bordered">Edit Profile</button>
                                    <i className="fas fa-ellipsis-h mx-4 cursor-pointer hover:bg-gray-50 p-4 rounded-full"></i>
                                </div>
                            </div>
                            <div className="mt-36 mx-10">
                                {/* NAME */}
                                <h1 className="font-bold text-4xl">{githubData.name}</h1>
                                {/* GITHUB DATA */}
                                <div className="flex items-center">
                                    <h1 className="font-bold text-xl text-gray-500">@{githubData.login}</h1>
                                    <h1 className="mx-8 font-bold text-xl text-gray-500"><i className="fas fa-map-marker-alt"></i>&nbsp;{githubData.location}</h1>
                                    <h1 className="font-bold text-xl text-gray-500"><i className="far fa-calendar-alt"></i>&nbsp;Joined Nov 2021</h1>
                                </div>
                                {/* HEADLINE */}
                                <h1 className="font-normal text-2xl my-4">{githubData.bio}</h1>
                                {/* FOLLLOWING */}
                                <div className="flex items-center">
                                    <span className="mr-2 font-extrabold text-2xl">0</span>
                                    <h1 className="font-bold text-xl text-gray-500">Followers</h1>
                                    <span className="ml-8 mr-2 font-extrabold text-2xl">0</span>
                                    <h1 className="font-bold text-xl text-gray-500">Following</h1>
                                </div>
                                {/* SOCIAL LINKS */}
                                <div>

                                </div>
                            </div>
                        </main>
                    </main>

                ) : "Loading..."
            }

        </div>
    )
}

export default Profile
