import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SignupModal from '../SignupModal/SignupModal';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const updateCounts = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
  // Sum total quantities in cart
  const totalCartQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  setCartCount(totalCartQuantity);
  setWishlistCount(wishlist.length);
  setWishlistCount(wishlistItems.length);
};


  useEffect(() => {
    updateCounts();

    const handleStorageUpdate = () => updateCounts();

    // Listen for custom in-app event
    window.addEventListener('storageUpdate', handleStorageUpdate);

    // Optional: Listen for native storage changes from other tabs
    window.addEventListener('storage', handleStorageUpdate);

    window.addEventListener("storageUpdate", handleStorageUpdate); // custom event
  window.addEventListener("storage", handleStorageUpdate);       //  browser sync

    return () => {
      window.removeEventListener('storageUpdate', handleStorageUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, []);

  return (
    <div className="nav w-100 fixed-top navbar-light bg-light shadow-sm">
      <nav className='navbar navbar-expand-lg py-3 justify-content-between align-items-center w-100 nav-wrapper'>
        <button 
          className="navbar-toggler"
          type='button'
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls='navbarNav'
          aria-expanded="false"
          aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <Link to="/" className='navbar-brand mx-auto order-0 d-lg-none d-flex'>
          <h2 className='m-0 fw-bold' style={{ letterSpacing: "2px" }}>ChronoVault</h2>
        </Link>

        {/* Mobile icons */}
        <ul className='d-lg-none d-flex align-items-center gap-3'>
          <li className='nav-item'><a href="#"><i className='bi bi-search fs-5 text-dark'></i></a></li>
          <li className='nav-item'><a href="#" data-bs-toggle="modal" data-bs-target="#signupModal"><i className='bi bi-person fs-5 text-dark'></i></a></li>
          <li className='nav-item position-relative'>
            <Link to="/wishlist"><i className='bi bi-heart fs-5 text-dark'></i>
              <span className='position-absolute top-0 start-100 translate-middle cart-count rounded-pill'>{wishlistCount}</span>
            </Link>
          </li>
          <li className='nav-item position-relative'>
            <Link to="/cart"><i className='bi bi-bag fs-5 text-dark'></i>
              <span className='position-absolute top-0 start-100 translate-middle cart-count rounded-pill'>{cartCount}</span>
            </Link>
          </li>
        </ul>

        <div className='collapse navbar-collapse justify-content-between' id='navbarNav'>
          {/* Main nav links */}
          <ul className='navbar-nav nav-menu align-items-center gap-4'>
            <li className='nav-item'><Link to="/" className='nav-link'>Home</Link></li>
            <li className='nav-item'><Link to="/about" className='nav-link'>About</Link></li>
            <li className='nav-item'><Link to="/Shop" className='nav-link'>Shop</Link></li>
            
            <li className='nav-item'><Link to="#" className='nav-link'>Contact</Link></li>
          </ul>

          {/* Center logo (for large screens) */}
          <Link to="/" className='navbar-brand order-0 d-none d-lg-flex'>
            <h2 className='m-0 fw-bold' style={{ letterSpacing: "2px" }}>ChronoVault</h2>
          </Link>

          {/* Desktop icons */}
          <ul className='navbar-nav d-none d-lg-flex align-items-center gap-4'>
            <li className='nav-item'><a href="#"><i className='bi bi-search fs-5 text-dark'></i></a></li>
            <li className='nav-item'><a href="#" data-bs-toggle="modal" data-bs-target="#signupModal"><i className='bi bi-person fs-5 text-dark'></i></a></li>
            <li className='nav-item position-relative'>
              <Link to="/wishlist"><i className='bi bi-heart fs-5 text-dark'></i>
                <span className='position-absolute top-0 start-100 translate-middle cart-count rounded-pill'>{wishlistCount}</span>
              </Link>
            </li>
            <li className='nav-item position-relative'>
              <Link to="/cart"><i className='bi bi-bag fs-5 text-dark'></i>
                <span className='position-absolute top-0 start-100 translate-middle cart-count rounded-pill'>{cartCount}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <SignupModal />
    </div>
  );
};

export default Navbar;
