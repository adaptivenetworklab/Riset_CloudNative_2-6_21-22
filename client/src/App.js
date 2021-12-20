/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

export default() => {
    return <div className='container'>
        <h1>Post Create</h1>
        <PostCreate />
        <hr />
        <h1>Posts</h1>
        <PostList />
    </div>
};