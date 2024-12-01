import React from 'react';
import './Features.css'; // Import CSS

const Features = () => {
    const featureData = [
        {
            id: 1,
            icon: 'https://i.postimg.cc/MKRh0GNg/boat-with-containers.png', // Free Shipping Icon URL
            title: 'Free Shipping',
            description: 'On all orders over $50.',
        },
        {
            id: 2,
            icon: 'https://i.postimg.cc/Nf7df2WG/telephone-call.png', // 24/7 Support Icon URL
            title: '24/7 Customer Support',
            description: 'We are here to assist you anytime.',
        },
        {
            id: 3,
            icon: 'https://i.postimg.cc/T3tQnMdZ/money.png', // Money Back Icon URL
            title: '100% Money Back',
            description: 'Satisfaction guaranteed or your money back.',
        },
        {
            id: 4,
            icon: 'https://i.postimg.cc/7hrNqq9T/padlock.png', // Secure Payment Icon URL
            title: 'Secure Payment',
            description: 'Your payment information is safe with us.',
        },
        
    ];

    return (
        <div className="features-section">
            <h2 className="features-heading">Why Shop With Us?</h2>
            <div className="features-container">
                {featureData.map((feature) => (
                    <div className="feature-card" key={feature.id}>
                        <img
                            src={feature.icon}
                            alt={feature.title}
                            className="feature-icon"
                        />
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
