/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect} from "react";
import axios from "axios";

export default ({postId}) => {
    const [comments, setComments] = useState([]);

    const fetchData = async () => {
        const res = await axios.get(`http://posts.com/posts/${postId}/comments`);
        console.log("getting comments data ... ", res.data.data)
        setComments(res.data.data);
    };

    useEffect( () => {
        fetchData();
    }, []);

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    })

    return <ul>
        {renderedComments}
    </ul>
};