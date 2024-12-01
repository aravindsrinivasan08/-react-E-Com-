import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext); // Access cartItems and removeFromCart
    const navigate = useNavigate(); // Hook to navigate to another page
    const [discount, setDiscount] = useState(0); // To store the discount percentage
    const [discountCode, setDiscountCode] = useState(""); // To store the entered code

    // Function to calculate total price
    const getTotalPrice = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    // Function to apply discount
    const applyDiscount = (code) => {
        const discounts = {
            'SAVE10': 0.10, // 10% discount
            'SAVE20': 0.20, // 20% discount
            'ARAVIND08': 0.08, // 8% discount for your custom code
        };

        if (discounts[code]) {
            setDiscount(discounts[code]);
            alert(`Discount applied: ${code}`);
        } else {
            alert('Invalid discount code');
        }
    };

    // Calculate final price after discount
    const finalPrice = getTotalPrice() * (1 - discount);

    // Navigate to checkout
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
                            {cartItems.map((item, index) => {
                                const itemTotal = item.price * item.quantity; // Calculate item total
                                return (
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
                                            <p className="cart-item-price">Price: ${item.price}</p>
                                            <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                                            {/* Display total price for this item */}
                                            <p className="cart-item-total">Total: ${itemTotal.toFixed(2)}</p>
                                            {/* Remove/Decrement button */}
                                            <button
                                                className="remove-button"
                                                onClick={() => {
                                                    // If the quantity is greater than 1, decrement it; otherwise, remove the item from the cart.
                                                    if (item.quantity > 1) {
                                                        decrementQuantity(item); // Decrement quantity
                                                    } else {
                                                        removeFromCart(item); // Remove the item if quantity is 1
                                                    }
                                                }}
                                            >
                                                {item.quantity > 1 ? (
                                                    <>
                                                        <span className="decrement">-</span>
                                                        <span className="remove-text"> Remove </span>
                                                        
                                                    </>
                                                ) : (
                                                    "Remove"
                                                )}
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Total and Discount Section */}
                        <div className="total-amount">
                            <p>Total: ${getTotalPrice().toFixed(2)}</p>
                            <p>Discount: {discount * 100}%</p>
                            <h3>Final Amount: ${finalPrice.toFixed(2)}</h3>
                        </div>

                        {/* Discount Code Section */}
                        <div className="discount-container">
                            <input
                                type="text"
                                value={discountCode}
                                onChange={(e) => setDiscountCode(e.target.value)}
                                placeholder="Enter discount code"
                                className="discount-input"
                            />
                            <button
                                className="discount-button"
                                onClick={() => applyDiscount(discountCode)}
                            >
                                Apply Discount
                            </button>
                        </div>

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
