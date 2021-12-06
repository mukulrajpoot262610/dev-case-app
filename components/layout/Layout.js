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
            githubUsername(userData.email).then((res) => dispatch(updateUsername(res))).catch((err) => console.log(err))
        }
    }, [userData, dispatch])

    return (
        <div className="min-h-screen pt-16 w-full dark:bg-primary dark:text-gray-200">
            {/* <div class="alert alert-warning">
                <div class="flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                    <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
                </div>
            </div> */}
            {children}
        </div>
    )
}

export default Layout
