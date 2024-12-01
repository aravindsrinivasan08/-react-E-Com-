import React, { useState, useContext } from 'react';
import './CheckOut.css';
import { CartContext } from './CartContext';

const CheckOut = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [step, setStep] = useState(1); // Step 1: Payment, Step 2: Address, Step 3: Confirmation
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zip: ''
    });

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    const handlePlaceOrder = () => {
        if (step === 1 && selectedPaymentMethod) {
            setStep(2); // Move to address filling step
        } else if (step === 2 && address.street && address.city && address.state && address.zip) {
            setStep(3); // Move to order confirmation step
            clearCart(); // Clear the cart once order is placed
        }
    };

    const handleAddressChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="checkout-container">
            {/* Payment Method Selection Step */}
            {step === 1 && (
                <div className="payment-method-section">
                    <h3>Select Payment Method</h3>
                    <div className="payment-options">
                        <label>
                            <input 
                                type="radio" 
                                value="Credit/Debit Card" 
                                checked={selectedPaymentMethod === 'Credit/Debit Card'} 
                                onChange={() => handlePaymentMethodChange('Credit/Debit Card')} 
                            />
                            Credit/Debit Card
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="Google Pay" 
                                checked={selectedPaymentMethod === 'Google Pay'} 
                                onChange={() => handlePaymentMethodChange('Google Pay')} 
                            />
                            Google Pay
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="PhonePe" 
                                checked={selectedPaymentMethod === 'PhonePe'} 
                                onChange={() => handlePaymentMethodChange('PhonePe')} 
                            />
                            PhonePe
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="Cash on Delivery" 
                                checked={selectedPaymentMethod === 'Cash on Delivery'} 
                                onChange={() => handlePaymentMethodChange('Cash on Delivery')} 
                            />
                            Cash on Delivery (COD)
                        </label>
                    </div>
                    {selectedPaymentMethod === 'Credit/Debit Card' && (
                        <div className="card-details">
                            <h4>Enter Card Details</h4>
                            <input type="text" placeholder="Card Number" />
                            <input type="text" placeholder="Expiry Date (MM/YY)" />
                            <input type="text" placeholder="CVV" />
                        </div>
                    )}
                </div>
            )}

            {/* Address Entry Step */}
            {step === 2 && (
                <div className="address-section">
                    <h3>Enter Shipping Address</h3>
                    <input 
                        type="text" 
                        name="street" 
                        placeholder="Street Address" 
                        value={address.street} 
                        onChange={handleAddressChange} 
                    />
                    <input 
                        type="text" 
                        name="city" 
                        placeholder="City" 
                        value={address.city} 
                        onChange={handleAddressChange} 
                    />
                    <input 
                        type="text" 
                        name="state" 
                        placeholder="State" 
                        value={address.state} 
                        onChange={handleAddressChange} 
                    />
                    <input 
                        type="text" 
                        name="zip" 
                        placeholder="Zip Code" 
                        value={address.zip} 
                        onChange={handleAddressChange} 
                    />
                </div>
            )}

            {/* Order Summary and Confirmation Step */}
            {step === 3 && (
                <div className="confirmation-section">
                    <h3>Order Placed Successfully!</h3>
                    <p>Thank you for your purchase! Your order will be processed soon.</p>
                </div>
            )}

            {/* Order Summary Section */}
            <div className="order-summary">
                <h3>Order Summary</h3>
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price} x {item.quantity}
                        </li>
                    ))}
                </ul>
                <h3>Total: ${totalAmount.toFixed(2)}</h3>
            </div>

            {/* Place Order Button */}
            {step < 3 && (
                <div className="place-order-container">
                    <button onClick={handlePlaceOrder} className="place-order-button">
                        {step === 1 ? 'Proceed to Address' : 'Place Order'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default CheckOut;
