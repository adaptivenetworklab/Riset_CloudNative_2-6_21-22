/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default() => {
    const [posts, setPosts] = useState({});

    const fetchFost = async () => {
        console.log(process.env.REACT_APP_NODE_ENV); // CHECK NODE ENVIRONMENT
        const res = await axios.get(`${process.env.REACT_APP_POST_BASE_URL}/posts`);
        console.log("getting post data ... ", res.data.data)
        setPosts(res.data.data)
    }

    useEffect(() => {
        fetchFost();
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return ( 
            
            <div className='card' style={{width: '30%', marginBottom: '20px'}} key={post._id}>
                <div className='card-body'>
                    <h3>{post.title}</h3>
                    <CommentList postId={post._id} />
                    <CommentCreate postId={post._id} />
                </div>
            </div>
        )
    });
    return <div className='d-flex flex-row flex-wrap justify-content-between'>
        {renderedPosts}
    </div>
}
