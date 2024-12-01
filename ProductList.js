import React from 'react';
import Products from './Products'; // Import the product data
import './Products.css'; // Import CSS for styling

const ProductList = () => {
    return (
        <div className="product-container">
            {Products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                    <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">₹{product.price.toFixed(2)}</p>
                        <p className="product-rating">{'★'.repeat(product.rating)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
