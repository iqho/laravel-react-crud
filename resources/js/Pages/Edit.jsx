import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react'


export default function Edit({ post, backUrl }) {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const { flash } = usePage().props
    const { errors } = usePage().props

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.put(`/posts/${post.id}`, {
            _method: 'PUT',
            title,
            body,
        });
    };

    return (
        <>
            <div className='container'>
            <a href={backUrl}>Back</a> <br />
                <h1>Edit Post</h1>
                <hr />
                <span style={{ color: 'green' }}>
                    {flash.message}
                </span> <br /> <br />

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
            <span style={{ color: 'red' }}>
                    {errors.title}
                </span>
                </div>
                <div>
                    <label>Body:</label>
                        <textarea
                            className='form-control'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                        ></textarea>
                <span style={{ color: 'red' }}>
                    {errors.body}
                </span>
                </div>
                    <button type="submit"
                        className='btn btn-primary mt-3'
                    >Update Post</button>
                </form>
                </div>
        </>
    );
}
