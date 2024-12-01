import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './AccessoriesProfileCard.css';
import QuantityControl from './QuantityControl';

function AccessoriesProfileCard({ name, image, description, price, discount }) {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [rating, setRating] = useState(0);

    // Calculate the discounted price
    const discountedPrice = discount ? (price - (price * discount) / 100).toFixed(2) : price;

    const handleIncrease = () => {
        if (quantity < 5) {
            setQuantity((prevQuantity) => prevQuantity + 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart({
            image,
            title: name,
            description,
            price: discountedPrice,
            discount,
            quantity,
            rating,
        });
    };

    const handleRatingClick = (newRating) => {
        setRating(newRating);
    };

    return (
        <div className="profile-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-description">{description}</p>
                <p className="product-price">
                    {discount ? (
                        <>
                            <span className="original-price">${price.toFixed(2)}</span>
                            <span className="discounted-price">${discountedPrice}</span>
                        </>
                    ) : (
                        `$${price.toFixed(2)}`
                    )}
                </p>

                {/* Star Rating Section */}
                <div className="star-rating">
                    {Array.from({ length: 5 }, (_, i) => (
                        <span
                            key={i}
                            role="img"
                            aria-label={i < rating ? 'filled star' : 'empty star'}
                            onClick={() => handleRatingClick(i + 1)}
                            style={{
                                cursor: 'pointer',
                                color: i < rating ? '#f7b733' : '#ddd',
                                fontSize: '20px',
                                marginRight: '5px',
                            }}
                        >
                            ⭐
                        </span>
                    ))}
                </div>

                <div className="quantity-control">
                    <button
                        className="quantity-btn"
                        onClick={handleDecrease}
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <span className="quantity">{quantity}</span>
                    <button
                        className="quantity-btn"
                        onClick={handleIncrease}
                        disabled={quantity >= 5}
                    >
                        +
                    </button>
                </div>

                {quantity >= 5 && <p className="out-of-stock">Out of Stock</p>}

                <button
                    className="add-to-cart"
                    onClick={handleAddToCart}
                    disabled={quantity > 5}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default AccessoriesProfileCard;
