import React from 'react';
import './TrustSeals.css'; // External CSS for styling

const TrustSeals = () => {
  return (
    <div className="trust-seals-container">
      <h3>Our Trusted Partners</h3>
      <div className="trust-seals">
        <img src="https://i.postimg.cc/RVxfxR9D/Untitled.png" alt="SSL Secure" />
        <img src="https://i.postimg.cc/8PnGLgXx/Untitled.jpg" alt="Visa" />
        <img src="https://i.postimg.cc/k4ZQS30J/master.png" alt="MasterCard" />
        <img src="https://i.postimg.cc/59YqVyz6/paypal.png" alt="PayPal" />
        <img src="https://i.postimg.cc/xCkHnpcW/norton.png" alt="Norton Secure" />
        {/* Add more logos as needed */}
      </div>
    </div>
  );
};

export default TrustSeals;
