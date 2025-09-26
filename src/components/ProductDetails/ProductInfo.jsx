import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const totalPrice = product.price * quantity;

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const exists = wishlist.find((item) => item.id === product.id);
    setIsInWishlist(!!exists);
  }, [product.id]);

  const handleAddToCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Include size if your product has it; fallback to 'default'
  const selectedSize = product.size || 'default';

  const existingIndex = cart.findIndex(
    item => item.id === product.id && item.size === selectedSize
  );

  if (existingIndex !== -1) {
    // Product already in cart, increase quantity
    cart[existingIndex].quantity += quantity;
  } else {
    // Product not in cart, add new item
    const productToAdd = {
      ...product,
      size: selectedSize,
      quantity,
    };
    cart.push(productToAdd);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('storageUpdate'));
  toast.success('Added to Cart!');
};


  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    const alreadyInWishlist = wishlist.find((item) => item.id === product.id);

    if (alreadyInWishlist) {
      toast.info('Already in Wishlist!');
      return;
    }

    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    setIsInWishlist(true);
    window.dispatchEvent(new Event('storageUpdate'));
    toast.success('Added to Wishlist!');
  };

  return (
    <div>
      <h5 className="fw-bold">${totalPrice.toFixed(2)}</h5>
      <h2 className="mb-4 fw-semibold">{product.productName}</h2>

      <p className="mb-1 fw-semibold">Quantity</p>
      <div className="d-flex align-items-center gap-3 mb-4 quantity">
        <div
          className="d-flex align-items-center quantity-box"
          style={{ maxWidth: '200px' }}
        >
          <button
            className="btn-count border-0"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <input
            type="text"
            className="form-control text-center mx-2"
            value={quantity}
            readOnly
          />
          <button
            className="btn-count border-0"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
        </div>

        {/* <button className="btn-custome w-100" onClick={handleAddToCart}>
          Add to Cart
        </button> */}

        <button
        className="btn-custome2 w-100 border-0 d-flex align-items-center justify-content-center gap-2"
        onClick={handleAddToWishlist}
      >
        <i className={`bi ${isInWishlist ? 'bi-heart-fill text-danger' : 'bi-heart'}`}></i>
        {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
      </button>
      </div>

      {/* Wishlist Button */}
      

      
      <button className="btn-custome2 w-100" onClick={handleAddToCart} style={{height: "50px"}}>
          Add to Cart
        </button>
      <hr />
      <p>
        <strong>Vendor:</strong> {product.vendor}
      </p>
      <p>
        <strong>Collection:</strong> {product.collection}
      </p>
      <p>
        <strong>SKU:</strong> {product.sku}
      </p>
      <hr />
      <p>{product.mainDescription}</p>
    </div>
  );
};
