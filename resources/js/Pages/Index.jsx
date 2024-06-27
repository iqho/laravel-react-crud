const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + '...';
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
                        <p style={{ fontSize:'16px', margin:'0px' }}>
                        {truncateText(post.body, 50)} <br />
                        </p>
                        <a href={post.showUrl} style={{ color: 'blue', fontSize: '14px' }}> Read more </a>
                        <br />
                        <a href={post.editUrl} style={{ color: 'green', fontSize: '14px' }}> Edit </a>
                    </li>
                ))}
                </ul>
                </div>
        </>
    );
}
