export default function Index({ posts }) {
    return (
        <>
            <h1>My Super Blog</h1>
            <a href="/posts">Posts</a> <br />
            <hr />
            {posts &&
                posts.map((item) => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                ))}
        </>
    );
}
