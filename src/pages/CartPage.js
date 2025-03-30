import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || {};

  const totalPrice = Object.values(cart).reduce((total, product) => total + product.price * product.quantity, 0);

  const removeFromCart = (id) => {
    const newCart = { ...cart };
    if (newCart[id].quantity > 1) {
      newCart[id].quantity -= 1;
    } else {
      delete newCart[id];
    }
    navigate("/cart", { state: { cart: newCart } });
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">The Suit Store</h1>
          <div className="nav-links">
            <button className="nav-btn" onClick={() => navigate("/")}>🏠 Home</button>
            <button className="nav-btn" onClick={() => navigate("/cart", { state: { cart } })}>🛒 Cart</button>
          </div>
        </div>
      </nav>

      <div className="cart-container">
        <h1>Your Cart</h1>
        {Object.keys(cart).length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="cart-items-list">
              {Object.values(cart).map((product) => (
                <li key={product.id} className="cart-item">
                  <img src={product.img} alt={product.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{product.name}</p>
                    <p className="cart-item-price">${product.price} x {product.quantity}</p>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(product.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className="total-price">
              <p>Total Price: <span>${totalPrice}</span></p>
            </div>
          </div>
        )}
        <button className="go-back-btn" onClick={() => navigate("/")}>Back to Shop</button>
        <button className="proceed-btn">Proceed to Payment</button>
      </div>
    </>
  );
};

export default CartPage;
