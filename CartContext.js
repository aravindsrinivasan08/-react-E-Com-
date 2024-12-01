import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add item to cart
    const addToCart = (itemToAdd) => {
        setCartItems((prevItems) => {
            const existingProductIndex = prevItems.findIndex(
                (product) => product.title === itemToAdd.title && product.image === itemToAdd.image
            );

            if (existingProductIndex > -1) {
                // If item exists, update quantity
                const updatedCart = [...prevItems];
                updatedCart[existingProductIndex].quantity += itemToAdd.quantity;
                return updatedCart;
            } else {
                // Add new item to cart
                return [...prevItems, { ...itemToAdd, quantity: itemToAdd.quantity }];
            }
        });
    };

    // Remove item from cart
    const removeFromCart = (itemToRemove) => {
        setCartItems((prevItems) =>
            prevItems.filter(
                (item) => item.title !== itemToRemove.title || item.image !== itemToRemove.image
            )
        );
    };

    // Increment item quantity
    const incrementQuantity = (item) => {
        setCartItems((prevItems) =>
            prevItems.map((i) =>
                i.title === item.title && i.image === item.image
                    ? { ...i, quantity: i.quantity + 1 }
                    : i
            )
        );
    };

    // Decrement item quantity
    const decrementQuantity = (item) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map((i) =>
                i.title === item.title && i.image === item.image
                    ? { ...i, quantity: i.quantity > 1 ? i.quantity - 1 : 1 }
                    : i
            );
            return updatedItems;
        });
    };

    // Clear cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Calculate total price
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                incrementQuantity,
                decrementQuantity,
                clearCart,
                calculateTotal
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
