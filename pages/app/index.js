import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import withAuth from '../../utils/withAuth'

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
            <textarea rows={rows} placeholder="What's going on?" className="w-full shadow-xl rounded-lg p-5 pb-12 bg-gray-100 dark:bg-gray-900" onChange={(text) => setValue(text.target.value)} />
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>({Math.floor(Math.random() * 10)}) DEVcase</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container flex min-h-screen px-10">
                <div className="shadow-xl rounded-lg h-full w-2/12 mx-4 p-4">
                    <p className="p-2 px-4 border rounded-lg"><i class="fas fa-home mr-1"></i>&nbsp;Home</p>
                    <p className=" my-2 p-2 px-4 border rounded-lg"><i class="fas fa-suitcase mr-1"></i>&nbsp;Case</p>
                    <p className="p-2 px-4 border rounded-lg"><i class="fas fa-bookmark mr-1"></i>&nbsp;Saved</p>
                </div>
                <div className="relative h-full w-8/12 mx-4 p-4">
                    <CustomTextarea minRows={3} />
                    <div className="absolute bottom-10 left-10 flex">
                        <i class="fas fa-plus-circle"></i>
                        <i class="mx-4 fas fa-code"></i>
                    </div>
                    <div className="absolute bottom-10 right-10 flex">
                        <i class="fas fa-paper-plane"></i>
                    </div>
                </div>
                <div className="h-full w-2/12 mx-4 p-4">
                    Mukul Rajpoot
                </div>
            </main>

        </div>
    )
}

export default withAuth(Home)
