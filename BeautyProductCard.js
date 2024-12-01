import React, { useContext, useState } from 'react';
import './BeautyProductCard.css';
import { CartContext } from './CartContext';
import App from './App';
import ScrollToTop from './ScrollToTop';

const BeautyProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { name, description, price, imageUrl, rating } = product;
    const [quantity, setQuantity] = useState(1);
    const maxQuantity = 5; // Set maximum quantity limit

    // Increase quantity
    const handleIncrease = () => {
        if (quantity < maxQuantity) {
            setQuantity((prevQuantity) => prevQuantity + 1);
        }
    };

    // Decrease quantity
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    // Add to cart
    const handleAddToCart = () => {
        addToCart({ image: imageUrl, title: name, description, price, rating, quantity });
    };

    return (
        <div className="product-card">
            <img src={imageUrl} alt={name} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-description">{description}</p>
                <p className="product-price">${price}</p>
                <div className="product-rating">
                    {Array.from({ length: rating }, (_, i) => (
                        <span key={i} role="img" aria-label="star">
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
                        disabled={quantity >= maxQuantity}
                    >
                        +
                    </button>
                </div>

                <button
                    className="add-to-cart"
                    onClick={handleAddToCart}
                    disabled={quantity >= maxQuantity}
                >
                    Add to Cart
                </button>
                <ScrollToTop/>
            </div>
        </div>
    );
};

export default BeautyProductCard;
