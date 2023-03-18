import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleOrderButton() {
    navigate("/OrderSummary");
  }
  return (
    <div className="App">
      <h1>This is home page</h1>
      <button onClick={handleOrderButton}>Click here to confirm order</button>
    </div>
  );
}
export default Home;
