import React from 'react';
import './Footer.css'; // Import the styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>At ShopSphere, we bring you the best in fashion, electronics, and more—handpicked for quality and style. With fast delivery, seamless service, and unbeatable value, we make shopping easy, exciting, and tailored just for you.
                       
                    </p>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/terms">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="footer-section social">
                    <h3>Connect With Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://i.postimg.cc/BnHQGj8v/facebook.png" alt="Facebook" className="social-icon" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://i.postimg.cc/sgLWXQKC/twitter.png" alt="Twitter" className="social-icon" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://i.postimg.cc/gJJH5FMG/instagram-1.png" alt="Instagram" className="social-icon" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://i.postimg.cc/SsnkKRZ3/linkedin.png" alt="LinkedIn" className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 SHOPSPHERE All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
