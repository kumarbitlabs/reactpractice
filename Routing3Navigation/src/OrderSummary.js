import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const Navigate = useNavigate();
  return (
    <div className="App">
      <h1>This is Ordersummary page. your order confirmed</h1>
      <button onClick={() => Navigate(-1)}>Click here to go back</button>
    </div>
  );
}
export default OrderSummary;
