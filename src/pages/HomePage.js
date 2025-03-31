import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

// const products = [
//   { id: 1, name: "Brown trousers", price: 10, img: "/images/pant1.jpg" },
//   { id: 2, name: "Green Shirt", price: 20, img: "/images/shirt1.jpg" },
//   { id: 3, name: "Brown Suit Jacket", price: 30, img: "/images/suit3.jpg" },
// ];

const products = [
  { id: 1, name: "Brown trousers", price: 10, img: `${process.env.PUBLIC_URL}/images/pant1.jpg` },
  { id: 2, name: "Green Shirt", price: 20, img: `${process.env.PUBLIC_URL}/images/shirt1.jpg` },
  { id: 3, name: "Brown Suit Jacket", price: 30, img: `${process.env.PUBLIC_URL}/images/suit3.jpg` },
];


const HomePage = () => {
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product.id]) {
        newCart[product.id].quantity += 1;
      } else {
        newCart[product.id] = { ...product, quantity: 1 };
      }
      return newCart;
    });
  };

  const viewCart = () => {
    navigate("/cart", { state: { cart } });
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">The Suit Store</h1>
          <div className="nav-links">
            <button className="nav-btn" onClick={() => navigate("/")}>🏠 Home</button>
            <button className="nav-btn" onClick={viewCart}>🛒 Cart</button>
          </div>
        </div>
      </nav>

      <div className="home-container">
        <h1 className="heading">Welcome to The Suit Store</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img className="product-img" src={product.img} alt={product.name} />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">${product.price}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <button className="view-cart-btn" onClick={viewCart}>
          🛒 View Cart
        </button>
      </div>
    </>
  );
};

export default HomePage;
