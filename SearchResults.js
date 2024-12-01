import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import products from './Products';
import FurnitureProfileCard from './FurnitureProfileCard';

const SearchResults = () => {
    const location = useLocation();
    const [searchResults, setSearchResults] = useState([]);

    // Extract the query parameter
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        if (query) {
            // Filter products based on the query
            const filtered = products.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filtered);
        }
    }, [query]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Search Results for: "{query}"</h2>
            <div className="product-list" style={{ display: 'grid', gap: '20px' }}>
                {searchResults.length > 0 ? (
                    searchResults.map((product) => (
                        <FurnitureProfileCard key={product.id} product={product} />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', fontSize: '18px' }}>No products found</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
