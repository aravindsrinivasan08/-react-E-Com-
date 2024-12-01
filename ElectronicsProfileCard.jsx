import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import QuantityControl from './QuantityControl';
import ScrollToTop from './ScrollToTop';

const ElectronicsProfileCard = ({ product }) => {
    const { image, title, description, price, initialRating = 3 } = product; // Default rating to 3
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [rating, setRating] = useState(initialRating);
    const [hoverRating, setHoverRating] = useState(null);

    const handleAddToCart = () => {
        addToCart({ image, title, description, price, rating, quantity });
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating); // Update the rating on click
    };

    const handleMouseEnter = (index) => {
        setHoverRating(index + 1); // Set hoverRating while hovering
    };

    const handleMouseLeave = () => {
        setHoverRating(null); // Reset hoverRating on mouse leave
    };

    const cardStyle = {
        width: '240px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'left',
    };

    const starStyle = (index) => ({
        cursor: 'pointer',
        color: index < (hoverRating || rating) ? '#f7b733' : '#ddd', // Highlight stars
        fontSize: '20px',
        marginRight: '4px',
        transition: 'color 0.2s, transform 0.2s',
        transform: index < (hoverRating || rating) ? 'scale(1.2)' : 'scale(1)',
    });

    return (
        <div style={cardStyle}>
            <img src={image} alt={title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            <div style={{ padding: '12px 16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
                    {title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>{description}</p>
                <p style={{ fontSize: '18px', color: '#007bff', fontWeight: 'bold', marginBottom: '16px' }}>
                    ${price}
                </p>

                {/* Star Rating */}
                <div style={{ marginBottom: '10px', display: 'flex' }}>
                    {Array.from({ length: 5 }, (_, i) => (
                        <span
                            key={i}
                            role="img"
                            aria-label={i < rating ? 'filled star' : 'empty star'}
                            onClick={() => handleRatingChange(i + 1)}
                            onMouseEnter={() => handleMouseEnter(i)}
                            onMouseLeave={handleMouseLeave}
                            style={starStyle(i)}
                        >
                            ⭐
                        </span>
                    ))}
                </div>

                {/* Quantity Control */}
                <QuantityControl quantity={quantity} setQuantity={setQuantity} />
                
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <button
                        onClick={handleAddToCart}
                        style={{
                            padding: '10px',
                            backgroundColor: '#ff9900',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#ffffff',
                            fontSize: '16px',
                            cursor: 'pointer',
                        }}
                    >
                        Add to Cart
                    </button>
                    <ScrollToTop/>
                </div>
            </div>
        </div>
    );
};

export default ElectronicsProfileCard;
