import React from 'react';
import DeleteButton from './components/DeleteButton';


const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength);
};

export default function Index({ posts }) {
    return (
        <>
            <div className='container'>

            <a href="/posts/create">Create Post</a> <br />
            <h1>My Super Blog</h1>
            <hr />
            <ul>
                {posts.map(post => (
                    <li key={post.id} style={{ fontSize:'18px', marginBottom:'5px', paddingBottom:'5px' }}>
                        <a href={post.showUrl} style={{ color: 'red' }}> {post.title} </a> <br/>
                        <p style={{ fontSize: '16px', margin: '0px' }}>
                            {post.body.length > 50 ? (
                                <span>
                                    {truncateText(post.body, 50)}
                                    <a href={post.showUrl} style={{ color: 'blue', fontSize: '14px' }}> Read more </a>
                                </span>
                            ) : (
                                post.body
                            )}
                        </p>
                        <a href={post.showUrl} className='btn btn-success py-0 me-1'> Show </a>
                        <a href={post.editUrl} className='btn btn-primary py-0 me-1'> Edit </a>
                        <DeleteButton deleteUrl={post.deleteUrl} />
                    </li>
                ))}
                </ul>
                </div>
        </>
    );
}
