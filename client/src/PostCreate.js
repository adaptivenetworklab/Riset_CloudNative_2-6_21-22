/* eslint-disable no-const-assign */
/* eslint-disable import/no-anonymous-default-export */
import React,{useState} from 'react';
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`${process.env.REACT_APP_POST_BASE_URL}/posts`, {
            title
        });
        setTitle('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Title</label>
                    <input 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className='form-control'/>
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
};