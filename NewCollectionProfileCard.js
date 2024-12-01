import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewCollectionProfileCard.css';

const NewCollectionProfileCard = () => {
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: 'Books',
            image: 'https://i.postimg.cc/CL1Hv3nY/pexels-rickyrecap-1926988.jpg',
            route: '/books',
        },
        {
            id: 2,
            name: 'Fitness',
            image: 'https://i.postimg.cc/jSh658VM/pexels-bemistermister-3490348.jpg',
            route: '/fitness',
        },
        {
            id: 3,
            name: 'Watches',
            image: 'https://i.postimg.cc/9fFdqGCC/pexels-bemistermister-380782.jpg',
            route: '/watches',
        },
    ];

    const colors = ['#FF7EB3', '#7EC8E3', '#FFD56B', '#85E89D'];

    const handleShopNow = (product) => {
        if (product.route) {
            navigate(product.route);
        }
    };

    return (
        <div>
            <div className="centered-heading">
            <h1 class="marquee1">LIMITED EDITION SHOP SOON</h1>

            </div>

            <div className="new-collection-container">
                {products.map((product, index) => (
                    <div
                        className="new-collection-card"
                        key={product.id}
                        style={{ background: colors[index % colors.length] }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="new-collection-image"
                        />
                        <div className="new-collection-info">
                            <h3 className="new-collection-name">{product.name}</h3>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => handleShopNow(product)}
                            >
                                Shop Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCollectionProfileCard;
