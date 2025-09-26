import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { triggerStorageUpdate } from '../../utils/storageEvents';


const ProductCard = ({ product }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const found = wishlist.some((item) => item.id === product.id);
    setIsInWishlist(found);
  }, [product.id]);

  const triggerNavbarUpdate = () => {
    
    window.dispatchEvent(new Event('storageUpdate'));
  };

  const handleAddToCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const selectedSize = product.size || "default"; // assuming size comes from product data or default
  const existingIndex = cart.findIndex(
    item => item.id === product.id && item.size === selectedSize
  );

  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
      size: selectedSize,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  triggerNavbarUpdate();
  toast.success("Added to cart!");
};


  const handleAddToWishlist = () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const exists = wishlist.some((item) => item.id === product.id);

  if (exists) {
    toast.warning("Product is already in wishlist!");
    return;
  }

  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  setIsInWishlist(true);
  toast.success("Added to wishlist!");
  triggerNavbarUpdate();
};

  return (
    <div className="product-item text-center position-relative">
      <div className="product-image w-100 position-relative overflow-hidden">
        <img src={product.image} alt={product.productName} className="img-fluid" />
        <img src={product.secondImage} alt={product.productName} className="img-fluid" />

        <div className="product-icons gap-3">
          <div
            className="product-icon"
            title="Add to Wishlist"
            onClick={handleAddToWishlist}
          >
            <i
              className={`fs-5 ${
                isInWishlist ? "bi bi-heart-fill text-danger" : "bi bi-heart"
              }`}
            ></i>
          </div>

          <div
            className="product-icon"
            title="Add to Cart"
            onClick={handleAddToCart}
          >
            <i className="bi bi-cart3 fs-5"></i>
          </div>
        </div>

        <span
          className={`tag badge text-white ${
            product.tag === "New" ? "bg-danger" : "bg-success"
          }`}
        >
          {product.tag}
        </span>
      </div>

      <Link to={`/product/${product.id}`} className="text-decoration-none text-black">
        <div className="product-content pt-3">
          <span className="price">{product.price}</span>
          <h3 className="title pt-1">{product.productName}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
