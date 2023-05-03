import Post from "./Post";

function Blog(props) {
  const posts = props.posts.map((post) => (
    <Post title={post.title} content={post.content} key={post.id} />
  ));
  return <div className="blog">{posts}</div>;
}
export default Blog;
