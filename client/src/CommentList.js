/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect} from "react";
import axios from "axios";

export default ({postId}) => {
    const [comments, setComments] = useState([]);

    const fetchData = async () => {
        const res = await axios.get(`${process.env.REACT_APP_COMMENT_BASE_URL}/posts/${postId}/comments`);
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