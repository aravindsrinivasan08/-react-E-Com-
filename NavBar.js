import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext'; // Import CartContext for cart items
import products from './Products'; // Import products directly from products.js
import './NavBar.css';

const NavBar = ({ onElectronicsClick, onBeautyClick, onAccessoriesClick }) => {
    const { cartItems } = useContext(CartContext); // Use cart context for cart item count
    const [userName, setUserName] = useState(localStorage.getItem('userName') || null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const navigate = useNavigate();

    // Update userName when localStorage changes
    useEffect(() => {
        const handleStorageChange = () => {
            setUserName(localStorage.getItem('userName'));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userName');
        setUserName(null);
    };

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleUserDropdown = () => setUserDropdownOpen(!userDropdownOpen);

    // Perform search based on query
    const performSearch = (query) => {
        if (query.trim()) {
            const filteredResults = products.filter(product =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredResults);
            setShowSearchResults(filteredResults.length > 0);
        } else {
            setSearchResults([]);
            setShowSearchResults(false);
        }
    };

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        performSearch(query);
    };

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
            setShowSearchResults(false);
        }
    };

    const handleResultClick = (productId) => {
        navigate(`/product/${productId}`);
        setShowSearchResults(false);
    };

    return (
        <nav className="navbar">
            {/* Logo Section */}
            <div className="logo">
                <Link to="/">
                <img
    src="https://i.postimg.cc/h4JhzpB6/Orange-and-Gray-Tag-Cart-Virtual-Shop-Logo.png"
    alt="Logo"
    style={{ height: '50px', width: '50px' }}
/>

                </Link>
            </div>

            {/* Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <button type="button" onClick={handleSearch}>
                    <img
                        src="https://i.postimg.cc/ZRBDX5wr/search.png"
                        alt="Search Icon"
                        width="16"
                        height="16"
                        className="search-icon"
                    />
                    Search
                </button>

                {showSearchResults && searchResults.length > 0 && (
                    <div className="search-results-dropdown">
                        {searchResults.map((product) => (
                            <div
                                key={product.id}
                                className="search-result-item"
                                onClick={() => handleResultClick(product.id)}
                            >
                                {product.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Category Buttons */}
            <div className="product-category-buttons">
                <Link to="/electronics">Electronics</Link>
                <Link to="/beauty">Beauty</Link>
                <Link to="/fashion">Fashion</Link>
                <Link to="/furniture">Furniture</Link>
            </div>

            {/* Navigation Items */}
            <div className="nav-items">
                {/* Categories Dropdown */}
                <div className="dropdown" onClick={toggleDropdown}>
                  
                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <a href="#" onClick={onElectronicsClick}>Electronics</a>
                            <a href="#" onClick={onBeautyClick}>Cosmetics</a>
                            <a href="#" onClick={onAccessoriesClick}>Furniture</a>
                        </div>
                    )}
                </div>

                {/* User Dropdown */}
                <div className="user-dropdown" onClick={toggleUserDropdown}>
                    <img
                        src="https://i.postimg.cc/MTTxZ8st/man.png"
                        alt="User Icon"
                        width="30px"
                        height="50px"
                        className="user-icon"
                    />
                    {userDropdownOpen && (
                        <div className="dropdown-content">
                            {!userName ? (
                                <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </>
                            ) : (
                                <div className="greeting-container">
                                    <span className="greeting-text">{`Hello, ${userName}`}</span>
                                    <div className="user-options">
                                        <Link to="/account">My Account</Link>
                                        <Link to="/orders">Order Status</Link>
                                        <Link to="/customer-service">Customer Service</Link>
                                        <button className="logout-button" onClick={handleLogout}>
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Cart Icon */}
                <Link to="/cart" className="cart-icon">
                    <span role="img" aria-label="cart">🛒</span>
                    <div className="cart-count">{cartItems ? cartItems.length : 0}</div>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
