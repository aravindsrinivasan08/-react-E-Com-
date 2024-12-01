import React, { useState, useContext } from 'react';
import './BooksProfileCard.css'; // Optional CSS for styling
import { CartContext } from './CartContext'; // Import CartContext

const BooksProfileCard = () => {
    const booksData = [
        {
            id: 1,
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            image: 'https://i.postimg.cc/ZY1xDBFx/pexels-pixabay-256450.jpg',
            price: '$15',
            rating: 5,
        },
        {
            id: 2,
            title: 'Atomic Habits',
            author: 'James Clear',
            image: 'https://i.postimg.cc/y6SF964g/pexels-thought-catalog-317580-904620.jpg',
            price: '$20',
            rating: 4,
        },
        {
            id: 3,
            title: 'Soyleme',
            author: 'Jame',
            image: 'https://i.postimg.cc/wxZ0M4fj/pexels-sosyal-ogretmen-884975272-29513113.jpg',
            price: '$90',
            rating: 5,
        },
        
    ];

    const { addToCart } = useContext(CartContext); // Access the addToCart function from context
    const [quantities, setQuantities] = useState({}); // State to manage quantities

    // Increment the quantity, ensuring it doesn't exceed 5
    const handleIncrement = (id) => {
        setQuantities((prev) => {
            const newQuantity = (prev[id] || 1) + 1;
            return { ...prev, [id]: newQuantity > 5 ? 5 : newQuantity };
        });
    };

    // Decrement the quantity, ensuring it doesn't go below 1
    const handleDecrement = (id) => {
        setQuantities((prev) => {
            const newQuantity = Math.max((prev[id] || 1) - 1, 1);
            return { ...prev, [id]: newQuantity };
        });
    };

    // Function to render the star rating
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
        ));
    };

    return (
        <div className="books-profile-container">
            <h1>Books Collection</h1>
            <div className="books-grid">
                {booksData.map((book) => (
                    <div key={book.id} className="book-card">
                        <img src={book.image} alt={book.title} className="book-image" />
                        <div className="book-info">
                            <h3>{book.title}</h3>
                            <p>by {book.author}</p>
                            <p>{book.price}</p>
                            <div className="rating">{renderStars(book.rating)}</div>

                            <div className="quantity-controls">
                                <button onClick={() => handleDecrement(book.id)}>-</button>
                                <span>{quantities[book.id] || 1}</span>
                                <button onClick={() => handleIncrement(book.id)}>+</button>
                            </div>

                            <button
                                className="add-to-cart-btn"
                                onClick={() =>
                                    addToCart({
                                        name: book.title,
                                        author: book.author,
                                        image: book.image,
                                        price: parseFloat(book.price.replace('$', '')), // Convert price to number
                                        quantity: quantities[book.id] || 1, // Get the current quantity
                                    })
                                }
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BooksProfileCard;
