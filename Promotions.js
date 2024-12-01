import React, { useState, useEffect } from 'react';
import './Promotions.css'; // External CSS for styling

const Promotions = () => {
  // You can set a specific date for the promotion end time
  const promotionEndDate = new Date('2024-12-31T23:59:59'); // example: New Year's Eve promotion
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = promotionEndDate - now;
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  return (
    <div className="promotions-container">
      <div className="promotion-banner">
        <h2>🎉 Festival Discount - Up to 50% OFF! 🎉</h2>
        <p>Use code <strong>FESTIVE50</strong> to enjoy amazing discounts!</p>
        <p className="promotion-timer">
          <span>{timeLeft.days}d</span> : <span>{timeLeft.hours}h</span> : 
          <span>{timeLeft.minutes}m</span> : <span>{timeLeft.seconds}s</span>
        </p>
      </div>
      <div className="promotion-details">
        <p>Limited-time offer for the holiday season! Shop now and save big on your favorite items.</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default Promotions;
