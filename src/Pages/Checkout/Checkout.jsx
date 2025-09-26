import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "cod", // default COD
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);

    // Calculate total
    let total = 0;
    items.forEach((item) => {
      total += item.price * (item.quantity || 1);
    });
    setTotalPrice(total);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!formData.name || !formData.email || !formData.address || !formData.phone) {
      alert("Please fill in all fields!");
      return;
    }

    // Save order
    const order = {
      customer: formData,
      items: cartItems,
      total: totalPrice,
      date: new Date().toISOString(),
    };
    localStorage.setItem("lastOrder", JSON.stringify(order));

    // Clear cart
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("storageUpdate"));

    // Navigate to success page
    navigate("/order-success");
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Checkout</h2>

      <div className="row">
        {/* User Form */}
        <div className="col-md-6">
          <form onSubmit={handleCheckout}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                className="form-control"
                rows="3"
                value={formData.address}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            {/* Payment Method */}
            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <div className="form-check">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  className="form-check-input"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label">Cash on Delivery</label>
              </div>
            </div>

            <button type="submit" className="btn btn-success">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="col-md-6">
          <h5 className="mb-2">Order Summary</h5>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul className="list-group mb-3">
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center">
                      <img src={item.image} alt="" width={80} className="me-2" />
                      <div>
                        <strong>{item.productName}</strong>
                        <br />
                        <small>Qty: {item.quantity || 1}</small>
                      </div>
                    </div>
                    <span>${item.price * (item.quantity || 1)}</span>
                  </li>
                ))}
              </ul>

              <div className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
