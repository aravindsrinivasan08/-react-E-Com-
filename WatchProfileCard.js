import React, { useContext, useState } from 'react';
import './WatchProfileCard.css';
import { CartContext } from './CartContext'; // Import CartContext

const WatchProfileCard = () => {
    const watchesData = [
        {
            id: 1,
            name: 'Classic Leather Watch',
            image: 'https://i.postimg.cc/8C06MvTF/classic-watch.jpg',
            price: 50,
        },
        {
            id: 2,
            name: 'Digital Smart Watch',
            image: 'https://i.postimg.cc/XJdwLQ7G/smart-watch.jpg',
            price: 75,
        },
        {
            id: 3,
            name: 'Luxury Gold Watch',
            image: 'https://i.postimg.cc/8PvrFh8c/luxury-watch.jpg',
            price: 150,
        },
    ];

    const { addToCart } = useContext(CartContext); // Access the addToCart function

    return (
        <div className="watches-profile-container">
            <h1>Watches Collection</h1>
            <div className="watches-grid">
                {watchesData.map((item) => (
                    <WatchCard key={item.id} item={item} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

const WatchCard = ({ item, addToCart }) => {
    const [quantity, setQuantity] = useState(1); // Track quantity

    // Increment quantity but limit to 5
    const handleIncrement = () => {
        if (quantity < 2) {
            setQuantity(quantity + 1);
        }
    };

    // Decrement quantity but don't go below 1
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="watches-card">
            <img src={item.image} alt={item.name} className="watches-image" />
            <div className="watches-info">
                <h3>{item.name}</h3>
                <p>${item.price}</p>

                {/* Quantity Control */}
                <div className="quantity-control">
                    <button onClick={handleDecrement} className="quantity-btn">-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement} className="quantity-btn">+</button>
                </div>

                <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart({
                        name: item.name,
                        image: item.image,
                        price: item.price,
                        quantity,
                    })}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default WatchProfileCard;
