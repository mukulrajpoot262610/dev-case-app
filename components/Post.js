import React from 'react'

const Post = () => {
    return (
        <div className="relative w-full shadow-sm p-4 dark:border-gray-700 border my-4 rounded-lg">
            <h1>Post</h1>
            <div className="flex items-center mt-4">
                <i className="far fa-heart text-xl"></i>
                <i className="far fa-comment-dots mx-8 text-xl"></i>
                <i className="far fa-bookmark text-xl"></i>
            </div>
        </div>
    )
}

export default Post
