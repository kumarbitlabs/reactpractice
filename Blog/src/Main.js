import Footer from "./Footer";
import Header from "./Header";
import Blog from "./Blog";

function Main(props) {
  return (
    <div className="main">
      <Header title={props.title} />
      <Blog posts={props.posts} />
      <Footer copyright="© 2023 Pavan" />
    </div>
  );
}

export default Main;
