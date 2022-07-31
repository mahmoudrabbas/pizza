function Post(props) {
    return (
        <div>
            <h1>{`this is the post nunber ${props.post.id}`}</h1>
        </div>
    );
}

export default Post;


export async function getServerSideProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const post = await res.json();

    return {
        props: {
            post
        }
    }
}