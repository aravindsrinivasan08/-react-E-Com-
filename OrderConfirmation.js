// OrderConfirmation.js
import React from 'react';
import './OrderConfirmation.css';
import { useHistory } from 'react-router-dom';

const OrderConfirmation = () => {
    const history = useHistory();

    const handleContinueShopping = () => {
        history.push('/'); // Redirects to the homepage or any other page you choose
    };

    return (
        <div className="order-confirmation-container">
            <div className="confirmation-icon">
                <span className="tick-mark">✔️</span>
            </div>
            <h3>Thank you for your purchase!</h3>
            <p>Your order will be processed soon.</p>
            <button onClick={handleContinueShopping} className="continue-shopping-button">
                Continue Shopping
            </button>
        </div>
    );
};

export default OrderConfirmation;
