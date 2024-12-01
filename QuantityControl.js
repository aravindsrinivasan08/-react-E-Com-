import React from 'react';


const QuantityControl = ({ quantity, setQuantity, maxQuantity = 5, minQuantity = 1 }) => {
    const handleIncrease = () => {
        if (quantity < maxQuantity) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > minQuantity) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="quantity-control">
            <button
                onClick={handleDecrease}
                disabled={quantity <= minQuantity}
                className={`quantity-btn ${quantity <= minQuantity ? 'disabled' : ''}`}
            >
                -
            </button>
            <span className="quantity">{quantity}</span>
            <button
                onClick={handleIncrease}
                disabled={quantity >= maxQuantity}
                className={`quantity-btn ${quantity >= maxQuantity ? 'disabled' : ''}`}
            >
                +
            </button>
        </div>
    );
};

export default QuantityControl;
