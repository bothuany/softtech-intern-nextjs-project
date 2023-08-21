import React, { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const data = localStorage.getItem("cartItems");
    console.log("data", data);
    if (data) {
      setCartItems(JSON.parse(data));
    }
  }, []);

  const addToCart = (newItem) => {
    let info = isProductWithFeaturesAlreadyAdded(newItem);

    if (!info) {
      setCartItems([...cartItems, newItem]);
    } else {
      cartItems.map((item) => {
        if (item.id == info) {
          item.quantity += 1;
        }
      });
    }
  };

  const isProductWithFeaturesAlreadyAdded = (newItem) => {
    let result = false;
    cartItems.map((item) => {
      if (item.id === newItem.id) {
        result = item.id;
        return item.id;
      }
    });

    return result;
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const setItemQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });

    setCartItems(updatedCart);
  };

  const isCartIncludesProduct = (id) => {
    let result = false;
    cartItems.map((item) => {
        if (item.id === id) {
            result = true;
            return item.id;
        }
    });
    return result;
    };

  const values = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    clearCart,
    setItemQuantity,
    isCartIncludesProduct
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
