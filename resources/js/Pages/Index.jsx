export default function Index({ posts }) {
    return (
        <>
            <h1>My Super Blog</h1>
            <hr />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <a href={post.showUrl}>{post.title}</a> <br />
                        {post.body}
                    </li>
                ))}
            </ul>
        </>
    );
}
