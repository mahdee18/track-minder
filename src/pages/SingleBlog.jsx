import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBlog = () => {
    const singlePost = useLoaderData();
    return (
        <div>
            {singlePost.title}
        </div>
    );
};

export default SingleBlog;