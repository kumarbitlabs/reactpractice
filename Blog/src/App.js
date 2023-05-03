import "./styles.css";
import Main from "./Main";
import posts from "./posts";

export default function App() {
  return (
    <div className="App">
      <Main title="My Blog" posts={posts} />
    </div>
  );
}
