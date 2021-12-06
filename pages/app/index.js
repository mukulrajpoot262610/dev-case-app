import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import withAuth from '../../utils/withAuth'
import Post from '../../components/Post'

const Home = () => {

    function CustomTextarea({ minRows }) {
        const [rows, setRows] = React.useState(minRows);
        const [value, setValue] = React.useState("");

        React.useEffect(() => {
            const rowlen = value.split("\n");

            if (rowlen.length > minRows) {
                setRows(rowlen.length);
            }
        }, [value]);

        return (
            <textarea rows={rows} value={value} placeholder="What's going on?" className="w-full shadow-sm rounded-lg p-5 pb-12 bg-gray-100 dark:bg-gray-900" onChange={(text) => setValue(text.target.value)} />
        );
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>({Math.floor(Math.random() * 10)}) DEVcase</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container flex min-h-screen">
                <div className="hidden sm:block shadow-sm rounded-lg h-full w-2/12 lg:w-3/12 p-2">
                    <p className="p-2 px-4 rounded-lg"><i className="fas fa-home"></i>&nbsp;<span className="hidden lg:inline-block">Home</span></p>
                    <p className=" my-2 p-2 px-4 rounded-lg"><i className="fas fa-suitcase mr-1"></i>&nbsp;<span className="hidden lg:inline-block">Case</span></p>
                    <p className="p-2 px-4 rounded-lg"><i className="fas fa-bookmark mr-1"></i>&nbsp;<span className="hidden lg:inline-block">Saved</span></p>
                </div>

                <div className="h-full w-full sm:w-10/12 lg:w-6/12 p-2">
                    <div className="relative w-full">
                        <CustomTextarea minRows={3} />
                        <div className="absolute bottom-6 left-6 flex">
                            <i className="fas fa-plus-circle"></i>
                            <i className="mx-4 fas fa-code"></i>
                        </div>
                        <div className="absolute bottom-6 right-6 flex">
                            <i className="fas fa-paper-plane"></i>
                        </div>
                    </div>
                    <hr className="my-4 dark:border-gray-700" />
                    {
                        <>
                            <Post />
                            <Post />
                            <Post />
                        </>
                    }
                </div>

                <div className="hidden lg:block h-full w-2/12 lg:w-3/12 mx-4 p-2">
                    Mukul Rajpoot
                </div>
            </main>

        </div>
    )
}

export default withAuth(Home)
