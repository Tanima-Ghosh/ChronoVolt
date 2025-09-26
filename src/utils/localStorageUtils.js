export const getCartCount = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.length;
};

export const getWishlistCount = () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  return wishlist.length;
};
