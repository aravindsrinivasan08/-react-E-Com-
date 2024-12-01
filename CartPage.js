import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate(); // Hook to navigate to another page

    const handleProceedToBuy = () => {
        navigate('/checkout'); // Redirect to the checkout page
    };

    return (
        <div className="cart-page">
            <div className="cart-container">
                <h2>Shopping Cart</h2>
                {cartItems.length > 0 ? (
                    <>
                        <ul className="cart-items">
                            {cartItems.map((item, index) => (
                                <li key={index} className="cart-item">
                                    {/* Display the product image */}
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="cart-item-image" 
                                        style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
                                    />
                                    <div className="cart-item-details">
                                        <p className="cart-item-name">{item.name}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Checkout Button */}
                        <div className="checkout-container">
                            <button className="checkout-button" onClick={handleProceedToBuy}>
                                Proceed to Buy
                            </button>
                        </div>
                    </>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
