import React, { useContext, useState } from 'react';
import QuantityControl from './QuantityControl';
import { CartContext } from './CartContext';
import './FashionProfileCard.css';
import ScrollToTop from './ScrollToTop';

const FashionProfileCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { name, image, price, description, rating } = product;
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    return (
        <div className="profile-card">
            <img src={image} alt={name} className="profile-image" />
            <div className="profile-info">
                <h3 className="profile-name">{name}</h3>
                <p className="profile-price">${price}</p>
                <div className="profile-rating">
                    {Array.from({ length: rating }, (_, i) => (
                        <span key={i} role="img" aria-label="star">
                            ⭐
                        </span>
                    ))}
                </div>
                <p className="profile-description">{description}</p>

                {/* Quantity Control Component */}
                <QuantityControl quantity={quantity} setQuantity={setQuantity} />

                {/* Add to Cart Button */}
                <button className="add-to-cart" onClick={handleAddToCart}>
                    Add to Cart
                </button>
                <ScrollToTop/>
            </div>
        </div>
    );
};

export default FashionProfileCard;
