import React from 'react';

import { Link } from 'react-router-dom';

const CartSummary = ({ cartItems }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="card p-3">
      <h5>Order Summary</h5>
      <hr />
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Shipping: Free</p>
      <h6>Total: ${subtotal.toFixed(2)}</h6>
      {/* <button className="btn btn-primary w-100 mt-3">Proceed to Checkout</button> */}
      <Link to="/checkout" className="btn btn-primary w-100 mt-3">Proceed to Checkout</Link>
    </div>
  );
};

export default CartSummary;
