// import React from 'react'
import React, { useEffect, useState } from 'react';
import CartItem from '../../components/Cart/CartItem';
import CartSummary from '../../components/Cart/CartSummary';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  // Update localStorage whenever cart changes
  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    window.dispatchEvent(new Event("storageUpdate"))
  };

  const handleQuantityChange = (productId, newQty) => {
    const updated = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: newQty } : item
    );
    updateCart(updated);
  };

  const handleRemove = (productId) => {
    const updated = cartItems.filter(item => item.id !== productId);
    updateCart(updated);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Cart</h2>
      <div className="row">
        <div className="col-md-8">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))
          )}
        </div>
        <div className="col-md-4">
          <CartSummary cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart