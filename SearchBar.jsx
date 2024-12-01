import React, { useState } from 'react';
import products from './Products';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchTerm(query);

        if (query) {
            const filtered = products.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    };

    const handleItemClick = (product) => {
        console.log('Clicked product:', product);
        setSearchTerm(product.name); // Set the search term to the selected product
        setFilteredProducts([]); // Clear dropdown
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && filteredProducts.length > 0) {
            // Trigger the first product selection when Enter is pressed
            handleItemClick(filteredProducts[0]);
        }
    };

    return (
        <div style={{ position: 'relative', margin: '20px', maxWidth: '400px' }}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown} // Listen for Enter key press
                placeholder="Search products..."
                style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border 0.3s ease',
                    backgroundColor: '#f9f9f9', // Light background for input
                }}
            />
            {filteredProducts.length > 0 && (
                <ul style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    right: '0',
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderTop: 'none',
                    borderRadius: '4px',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    zIndex: '10',
                    marginTop: '5px',
                    padding: '0',
                    listStyleType: 'none',
                }}>
                    {filteredProducts.map((product) => (
                        <li
                            key={product.id}
                            onClick={() => handleItemClick(product)}
                            style={{
                                padding: '12px',
                                fontSize: '16px',
                                color: '#4CAF50', // Green color for product names
                                cursor: 'pointer',
                                backgroundColor: '#e0f7fa', // Light cyan background
                                borderBottom: '1px solid #eee',
                                transition: 'background-color 0.3s ease',
                            }}
                        >
                            {product.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
