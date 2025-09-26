import React from 'react';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const { id, productName, image, price, quantity, size } = item;

  return (
    <div className="card mb-3 p-3">
      <div className="d-flex align-items-center gap-3">
        <img src={image} alt={productName} style={{ width: '100px' }} />
        <div className="flex-grow-1">
          <h5 className="mb-1">{productName}</h5>
          <p className="mb-1">${price} x {quantity} = ${(price * quantity).toFixed(2)}</p>
          <div className="d-flex gap-2 align-items-center">
            <button
              onClick={() => onQuantityChange(id, Math.max(1, quantity - 1))}
              className="btn btn-outline-secondary btn-sm"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => onQuantityChange(id, quantity + 1)}
              className="btn btn-outline-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => onRemove(id)}
              className="btn btn-danger btn-sm ms-3"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
