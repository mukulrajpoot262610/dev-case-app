import React from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import firebase from '../config/firebase'
import { useRouter } from 'next/router'

const Navbar = () => {

    const router = useRouter()

    const { systemTheme, theme, setTheme } = useTheme()
    const user = useSelector(state => state.currentUser)
    const { isAuth, loading, userData } = user;

    const renderThemeChanger = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <h1 className="text-2xl" role="button" onClick={() => setTheme('light')}>🌞</h1>
            )
        } else {
            return (
                <h1 className="text-2xl" role="button" onClick={() => setTheme('dark')}>🌙</h1>
            )
        }
    }

    const handleLogout = async () => {
        await firebase.auth().signOut()
            .then((res) => {
                alert('Logged Out Successfully')
                router.replace('/')
                localStorage.clear()
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <div className="h-16 border-b backdrop-blur-lg w-full fixed top-0 flex items-center justify-evenly px-4 z-50">
            <div className="container flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-purple-600">DEV<span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-600">case</span></h1>
                </Link>
                <div className="flex items-center cursor-pointer">
                    {
                        isAuth ? (
                            <>
                                <button className="btn mx-2 bg-gradient-to-br from-blue-500 to-green-600" onClick={handleLogout}>LogOut</button>
                                <i className="far fa-bell mx-2 text-2xl"></i>
                                <div className="avatar mx-2">
                                    <div className="w-10 h-10 mask mask-squircle">
                                        <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
                                    </div>
                                </div>
                            </>
                        ) :
                            (
                                <>
                                    <Link href="/auth">
                                        <button className="btn mx-3 bg-gradient-to-br from-red-500 to-purple-600">Login</button>
                                    </Link>
                                </>
                            )
                    }

                    {renderThemeChanger()}
                </div>
            </div>
        </div>
    )
}

export default Navbar
