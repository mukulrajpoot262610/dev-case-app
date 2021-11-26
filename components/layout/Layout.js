import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="dark:bg-primary dark:text-gray-200">
            {children}
        </div>
    )
}

export default Layout
