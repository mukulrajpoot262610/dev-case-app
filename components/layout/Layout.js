import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import githubUsername from 'github-username';
import { updateUsername } from '../../store/actions/profileActions';

const Layout = ({ children }) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.currentUser)
    const { userData } = user;

    useEffect(() => {
        if (!userData.username && userData.email) {
            githubUsername(userData.email).then((res) => {
                console.log(res)
                dispatch(updateUsername(res))
            }).catch((err) => dispatch(updateUsername("ERROR")))
        }
    }, [userData, dispatch])

    return (
        <div className="min-h-screen w-full dark:bg-primary dark:text-gray-200">
            {children}
        </div>
    )
}

export default Layout
