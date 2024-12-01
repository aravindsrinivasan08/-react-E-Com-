import React, { useState } from 'react';
import './CheckoutPage.css'; // Add styles for the checkout page if needed

const CheckoutPage = () => {
    const [address, setAddress] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // For now, just display the address entered
        setIsSubmitted(true);
    };

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <h2>Delivery Address</h2>

                {!isSubmitted ? (
                    <form onSubmit={handleSubmit}>
                        <div className="address-form">
                            <label htmlFor="address">Enter Delivery Address:</label>
                            <textarea
                                id="address"
                                value={address}
                                onChange={handleAddressChange}
                                placeholder="Enter your delivery address"
                                required
                            />
                            <button type="submit" className="submit-button">
                                Submit Address
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="confirmation">
                        <h3>Thank you for your purchase!</h3>
                        <p>Your order will be shipped to:</p>
                        <p>{address}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;
