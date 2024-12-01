import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Cart from './Cart';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import CheckOut from './CheckOut';
import SearchResults from './SearchResults';
import MainPageContent from './MainPageContent';
import FashionProfileCard from './FashionProfileCard';
import ElectronicsProfileCard from './ElectronicsProfileCard';
import BeautyProductCard from './BeautyProductCard';
import FurnitureProfileCard from './FurnitureProfileCard';
import BooksProfileCard from './BooksProfileCard';
import FitnessProfileCard from './FitnessProfileCard';
import WatchesProfileCard from './WatchProfileCard';
import './App.css';



// Pages for each product category
const ElectronicsPage = ({ electronicsProducts }) => {
    return (
        <div className="product-list">
            {electronicsProducts.map((product, index) => (
                <ElectronicsProfileCard key={index} product={product} />
            ))}
        </div>
    );
};

const BeautyPage = ({ beautyProducts }) => {
    return (
        <div className="product-list">
            {beautyProducts.map((product, index) => (
                <BeautyProductCard key={index} product={product} />
            ))}
        </div>
    );
};

const FashionPage = ({ fashionProducts }) => {
    return (
        <div className="product-list">
            {fashionProducts.map((product, index) => (
                <FashionProfileCard key={index} product={product} />
            ))}
        </div>
    );
};

const FurniturePage = ({ furnitureProducts }) => {
    return (
        <div className="product-list">
            {furnitureProducts.map((product, index) => (
                <FurnitureProfileCard key={index} product={product} />
            ))}
        </div>
    );
};

const App = () => {
    // Sample product data
    const beautyProducts = [
        { name: 'Hydrating Face Cream', description: 'A lightweight, hydrating face cream.', price: '29.99', imageUrl: 'https://i.postimg.cc/sxFVV7yj/pexels-matvalina-29483078.jpg', rating: 4 },
        { name: 'Rejuvenating Night Cream', description: 'A rich night cream.', price: '45.00', imageUrl: 'https://i.postimg.cc/tJh97JCh/pexels-karolina-grabowska-4202325.jpg', rating: 5 },
        { name: 'Rejuvenating Night Cream', description: 'A rich night cream.', price: '45.00', imageUrl: 'https://i.postimg.cc/05mkVWdb/pexels-harper-sunday-3321416.jpg', rating: 5 },
        { name: 'Rejuvenating Night Cream', description: 'A rich night cream.', price: '45.00', imageUrl: 'https://i.postimg.cc/HkW3SN5m/pexels-alesiakozik-7796229.jpg', rating: 3 },
        { name: 'Rejuvenating Night Cream', description: 'A rich night cream.', price: '45.00', imageUrl: 'https://i.postimg.cc/9FkzSRwf/pexels-alesiakozik-7797115.jpg', rating: 2 },
        { name: 'Rejuvenating Night Cream', description: 'A rich night cream.', price: '45.00', imageUrl: 'https://i.postimg.cc/h4pBykQ4/pexels-cottonbro-9748522.jpg', rating: 5 },
        { name: 'Rejuvenating Night Cream', description: 'A rich night cream.', price: '45.00', imageUrl: 'https://i.postimg.cc/c4ybcTX1/pexels-pnw-prod-9219014.jpg', rating: 4 },
        { name: 'Rejuvenating Night Cream', description: 'A rich night cream.', price: '45.00', imageUrl: 'https://i.postimg.cc/RCPkQw2N/pexels-gabby-k-6621472.jpg', rating: 3},
    ];

    const fashionProducts = [
        { image: "https://i.postimg.cc/gkMGjnVP/pexels-raulkingr-1018911.jpg", name: "Shirt1", price: "200.99", description: "Stylish T-shirt", rating: 5 },
        { image: "https://i.postimg.cc/bw7cSbd4/pexels-marleneleppanen-1183266.jpg", name: "Shirt2", price: "200.99", description: "Stylish T-shirt", rating: 3 },
        { image: "https://i.postimg.cc/76XW9TYH/pexels-chloekalaartist-1043474.jpg", name: "Shirt3", price: "200.99", description: "Stylish T-shirt", rating: 2 },
        { image: "https://i.postimg.cc/76XW9TYH/pexels-chloekalaartist-1043474.jpg", name: "Shirt4", price: "200.99", description: "Stylish T-shirt", rating: 5 },
        { image: "https://i.postimg.cc/JndQt3zk/pexels-hamann-la-338986-1205033.jpg", name: "Shirt5", price: "200.99", description: "Stylish T-shirt", rating: 5 },
        { image: "https://i.postimg.cc/VL1Tpw7P/91-Yc-EQhs-VQL-AC-UL480-FMwebp-QL65.webp", name: "Shirt6", price: "200.99", description: "Stylish T-shirt", rating: 3 },
        { image: "https://i.postimg.cc/8PGbcC1w/pexels-wlid-1450114.jpg", name: "Shirt7", price: "200.99", description: "Stylish T-shirt", rating: 3.5 },
        { image: "https://i.postimg.cc/90dtb6BG/pexels-lukas-rychvalsky-670786.jpg", name: "Shirt8", price: "200.99", description: "Stylish T-shirt", rating: 4 },

    ];

    const electronicsProducts = [
        { image: "https://i.postimg.cc/3RZcrfbF/pexels-atomlaborblog-844923.jpg", title: "Wireless Headphones1", description: "High-quality wireless headphones.", price: "99.99", rating: 3 },
        { image: "https://i.postimg.cc/2ycH7tvr/headphone.jpg", title: "Wireless Headphones1", description: "High-quality wireless headphones.", price: "99.99", rating: 4 },
        { image: "https://i.postimg.cc/2ycH7tvr/headphone.jpg", title: "Wireless Headphones1", description: "High-quality wireless headphones.", price: "99.99", rating: 4 },
        { image: "https://i.postimg.cc/2ycH7tvr/headphone.jpg", title: "Wireless Headphones1", description: "High-quality wireless headphones.", price: "99.99", rating: 3 },
        { image: "https://i.postimg.cc/2ycH7tvr/headphone.jpg", title: "Wireless Headphones1", description: "High-quality wireless headphones.", price: "99.99", rating: 3 },
        { image: "https://i.postimg.cc/2ycH7tvr/headphone.jpg", title: "Wireless Headphones1", description: "High-quality wireless headphones.", price: "99.99", rating: 4 },
        { image: "https://i.postimg.cc/2ycH7tvr/headphone.jpg", title: "Wireless Headphones1", description: "High-quality wireless headphones.", price: "99.99", rating: 5 },
        { image: "https://i.postimg.cc/2ycH7tvr/headphone.jpg", title: "Wireless Headphones1", description: "High-quality wireless headphones.", price: "99.99", rating: 5 },
    ];

    const furnitureProducts = [
        { imageUrl: 'https://i.postimg.cc/bJfYQWV0/pexels-pixabay-276663.jpg', name: 'Grand Chesterfield sofas', price: 789.99, rating: 5 },
        { imageUrl: 'https://i.postimg.cc/rmZWy8wy/pexels-olly-3757055.jpg', name: 'Grand Chesterfield sofas', price: 789.99, rating: 5 },
        { imageUrl: 'https://i.postimg.cc/NFyX5WK6/pexels-fotoaibe-1571471.jpg', name: 'Grand Chesterfield sofas', price: 789.99, rating: 5 },
        { imageUrl: 'https://i.postimg.cc/Zq8zhRj3/pexels-donaldtong94-189295.jpg', name: 'Grand Chesterfield sofas', price: 789.99, rating: 3 },
        { imageUrl: 'https://i.postimg.cc/P5bwpb5R/pexels-fotoaibe-1571457.jpg', name: 'Grand Chesterfield sofas', price: 789.99, rating: 1 },
        { imageUrl: 'https://i.postimg.cc/xdJqGKfQ/pexels-jvdm-1543447.jpg', name: 'Grand Chesterfield sofas', price: 789.99, rating: 3 },
        { imageUrl: 'https://i.postimg.cc/8PcGrTPQ/pexels-subham-majumder-1992868-3614082.jpg', name: 'Grand Chesterfield sofas', price: 789.99, rating: 4 },
        { imageUrl: 'https://i.postimg.cc/MTg7b62P/pexels-isaw-company-66472-945669.jpg', name: 'Grand Chesterfield sofas', price: 789.99, rating: 4 },
    ];

    return (
        <Router>
            <div className="App">
                {/* Navbar with Links */}
                <NavBar />
                
                <div className="product-category-buttons">
                    
                </div>

                {/* Route definitions */}
                <Routes>
                    {/* Home page with MainPageContent */}
                    <Route path="/" element={<MainPageContent />} />

                    {/* Cart Page */}
                    <Route path="/cart" element={<Cart />} />

                    {/* Login Page */}
                    <Route path="/login" element={<LoginForm />} />

                    {/* Registration Page */}
                    <Route path="/register" element={<RegistrationForm />} />

                    {/* Checkout Page */}
                    <Route path="/checkout" element={<CheckOut />} />

                    {/* Search Results */}
                    <Route path="/search" element={<SearchResults />} />
                
                    <Route path="/books" element={<BooksProfileCard />} />
                    <Route path="/fitness" element={<FitnessProfileCard />} />
                    <Route path="/watches" element={<WatchesProfileCard />} />


                    {/* Category Pages */}
                    <Route path="/electronics" element={<ElectronicsPage electronicsProducts={electronicsProducts} />} />
                    <Route path="/beauty" element={<BeautyPage beautyProducts={beautyProducts} />} />
                    <Route path="/fashion" element={<FashionPage fashionProducts={fashionProducts} />} />
                    <Route path="/furniture" element={<FurniturePage furnitureProducts={furnitureProducts} />} />
                </Routes>

                {/* Footer always visible */}
                
                <Footer />
            </div>
        </Router>
    );
};

export default App;
