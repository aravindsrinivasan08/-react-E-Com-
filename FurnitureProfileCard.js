import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './FurnitureProfileCard.css';
import QuantityControl from './QuantityControl';
import ScrollToTop from './ScrollToTop';

const FurnitureProfileCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        const { imageUrl, name, description, price, rating } = product;
        addToCart({ image: imageUrl, title: name, description, price, rating, quantity });
    };

    return (
        <div className="furniture-card">
            <div className="furniture-card-image-wrapper">
                <img src={product.imageUrl} alt={product.name} className="furniture-card-image" />
                
            </div>
            <div className="furniture-card-content">
                <h3 className="furniture-card-title">{product.name}</h3>
                <p className="furniture-card-price">${product.price}</p>
                <div className="furniture-card-rating">
                    {Array.from({ length: product.rating }, (_, i) => (
                        <span key={i} role="img" aria-label="star">⭐</span>
                    ))}
                </div>

                <QuantityControl quantity={quantity} setQuantity={setQuantity} />

                <button onClick={handleAddToCart} className="furniture-card-button">
                    Add to Cart
                </button>
                <ScrollToTop/>
            </div>
        </div>
    );
};

export default FurnitureProfileCard;
