import React from 'react';

const ProductPage = () => {
    // Define the product object here
    const product = {
        name: "Casual Jacket",
        images: [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg"
        ],
        price: 49.99,
        description: "Stylish and comfortable casual jacket.",
        rating: 4
    };

    return (
        <div className="product-page">
            {/* Pass the product as a prop to FashionProfileCard */}
            <FashionProfileCard product={product} />
        </div>
    );
};

export default ProductPage;
