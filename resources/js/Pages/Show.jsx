export default function Show({ post, backUrl }) {
    return (
        <>
            <div className='container'>

            <a href={backUrl}>Back</a> <br />
            <h1>My Super Blog</h1>
            <hr />
            {post.id} <br />
            {post.title}
            <br />
                {post.body}
                </div>
        </>
    );
}
