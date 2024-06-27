export default function Show({ post, backUrl }) {
    return (
        <>
            <a href={backUrl}>Back</a> <br />
            <h1>My Super Blog 3</h1>
            <hr />
            {post.id} <br />
            {post.title}
            <br />
            {post.body}
        </>
    );
}
