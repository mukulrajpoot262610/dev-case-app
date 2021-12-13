import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import withAuth from '../../utils/withAuth'

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
                setError(data.message)
            } else {
                setGithubData(data)
            }

        }

        userData && fetchData()
    }, [userData])

    return (
        <div className=" flex flex-col items-center justify-start min-h-screen">
            <Head>
                <title>{githubData && githubData.name} | {router.query.username}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {
                githubData ? (
                    <main className="w-full flex flex-col items-center">
                        <img src="" className="w-full h-56 lg:h-96" alt="no" />
                        <main className="relative container p-4 md:px-10">
                            <div className="flex flex-col justify-between w-full items-start">
                                <div className="avatar absolute -top-20 md:-top-28">
                                    <div className="mb-8 w-40 h-40 md:w-60 md:h-60 mask mask-squircle">
                                        <img src={githubData?.avatar_url} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-20 md:mt-36">
                                {/* NAME */}
                                <h1 className="font-bold text-4xl">{githubData?.name}</h1>
                                {/* GITHUB DATA */}
                                <div className="flex items-center w-full flex-wrap">
                                    <h1 className="mr-8 font-bold text-lg text-gray-500">@{githubData?.login}</h1>
                                    <h1 className="font-bold text-lg text-gray-500"><i className="fas fa-map-marker-alt"></i>&nbsp;{githubData?.location}</h1>
                                </div>
                                {/* HEADLINE */}
                                {
                                    githubData.bio && <h1 className="font-normal text-xl my-4">{githubData.bio}</h1>
                                }
                                {/* FOLLLOWING */}
                                <h1 className="font-bold text-lg text-gray-500">Socials</h1>
                                <div className="flex items-center">
                                    {
                                        githubData.blog && <a href={githubData.blog} target="_blank">
                                            <span className="mr-2 font-extrabold text-xl">Website</span>
                                        </a>
                                    }
                                    <a href={githubData.html_url} target="_blank">
                                        <span className="ml-8 mr-2 font-extrabold text-xl">GitHub</span>
                                    </a>
                                    {
                                        githubData.twitter_username && <a href={githubData.twitter_username} target="_blank">
                                            <span className="ml-8 mr-2 font-extrabold text-xl">Twitter</span>
                                        </a>
                                    }
                                </div>
                            </div>
                        </main>
                    </main>

                ) : error ? <h1 className="mt-20">{error}</h1> : <h1 className="mt-20">Loading...</h1>
            }

        </div>
    )
}

export default withAuth(Profile)
