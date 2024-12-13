import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChnage(event) {
    setName(event.target.value);
  }
  function handleQuantityChante(event) {
    setQuantity(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handlePayment(event) {
    setPayment(event.target.value);
  }
  function handleShipping(event) {
    setShipping(event.target.value);
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleNameChnage} />
      <p>Name : {name}</p>
      <input value={quantity} onChange={handleQuantityChante} type="number" />
      <p>Quantity : {quantity}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      ></textarea>
      <p>Comment : {comment}</p>
      <select value={payment} onChange={handlePayment}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
      </select>
      <p>Payment : {payment}</p>
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShipping}
        />
        Pick Up
      </label>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShipping}
        />
        Delivery
      </label>
      <p>Shipping : {shipping}</p>
    </div>
  );
}

export default MyComponent;
