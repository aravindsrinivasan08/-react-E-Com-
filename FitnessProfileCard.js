import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import './FitnessProfileCard.css';

const FitnessProfileCard = () => {
    const fitnessData = [
        { id: 1, name: 'Yoga Mat', image: 'https://i.postimg.cc/y6Cfbj4g/yoga-mat.jpg', price: 25, rating: 4 },
        { id: 2, name: 'Dumbbells', image: 'https://i.postimg.cc/QMS5ZX8v/dumbbells.jpg', price: 40, rating: 5 },
        { id: 3, name: 'Resistance Bands', image: 'https://i.postimg.cc/GpZc5jTj/resistance-bands.jpg', price: 15, rating: 3 },
        
        
    ];

    const { addToCart } = useContext(CartContext);
    const [quantities, setQuantities] = useState({});

    const handleIncrement = (id) => {
        setQuantities((prev) => {
            const newQuantity = (prev[id] || 1) + 1;
            return { ...prev, [id]: newQuantity > 5 ? 5 : newQuantity }; // Limit to 5
        });
    };

    const handleDecrement = (id) => {
        setQuantities((prev) => {
            const newQuantity = Math.max((prev[id] || 1) - 1, 1); // Don't go below 1
            return { ...prev, [id]: newQuantity };
        });
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
        ));
    };

    return (
        <div className="fitness-profile-container">
            <h1>Fitness Collection</h1>
            <div className="fitness-grid">
                {fitnessData.map((item) => (
                    <div key={item.id} className="fitness-card">
                        <img src={item.image} alt={item.name} className="fitness-image" />
                        <div className="fitness-info">
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <div className="rating">{renderStars(item.rating)}</div>
                            <div className="quantity-controls">
                                <button onClick={() => handleDecrement(item.id)}>-</button>
                                <span>{quantities[item.id] || 1}</span>
                                <button onClick={() => handleIncrement(item.id)}>+</button>
                            </div>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => addToCart({
                                    name: item.name,
                                    image: item.image,
                                    price: item.price,
                                    quantity: quantities[item.id] || 1,
                                })}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FitnessProfileCard;
