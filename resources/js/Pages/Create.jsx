import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function CreatePost({ backUrl }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post('/posts', {
            title,
            body,
        });
    };

    return (
        <>
            <div className='container'>
            <a href={backUrl}>Back</a> <br />
            <h1>Create a New Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        className='form-control'
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Body:</label>
                    <textarea
                        className='form-control'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className='btn btn-primary mt-3'>Create Post</button>
                </form>
            </div>

        </>
    );
}
