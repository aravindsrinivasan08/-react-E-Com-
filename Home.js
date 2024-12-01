// Home.js - Displaying multiple products
import React from 'react';
import FashionProfileCard from './FashionProfileCard';

const Home = () => {
    const products = [
        {
            name: 'Stylish Dress',
            image: 'https://example.com/dress.jpg',
            price: 49.99,
            description: 'A beautiful and stylish dress for any occasion.',
            rating: 4,
        },
        {
            name: 'Casual Shirt',
            image: 'https://example.com/shirt.jpg',
            price: 29.99,
            description: 'A comfortable casual shirt.',
            rating: 3,
        },
        // Add more products as needed
    ];

    return (
        <div>
            <h1>Fashion Products</h1>
            {products.map((product, index) => (
                <FashionProfileCard key={index} product={product} />
            ))}
        </div>
    );
};

export default Home;
