// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './CartContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




ReactDOM.render(
    <CartProvider>
        
        
        

        <App />
    </CartProvider>,
    document.getElementById('root')
);
