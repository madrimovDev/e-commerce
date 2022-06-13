import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: (product) => {},
  removeFromCart: (id) => {},
  clearCart: () => {},
  plusAmount: (id) => {},
  minusAmount: (id) => {}
});
CartContext.displayName = "CartContext";

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const prod = {
      ...product,
      total: 1,
    };

    setCart((item) => {
      const index = item.findIndex((i) => i.id === prod.id);
      if (index === -1) {
        return [...item, prod];
      }
      item[index].total += 1;
      return [...item];
    });
  };

  const removeFromCart = (id) => {
    let oldCart = cart.filter((item) => item.id !== id);
    setCart(oldCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const plusAmount = (id) => {
    setCart(item => {
      item.map(item => {
        if(item.id === id){
          item.total += 1
          return item
        }
      })
    })
  }

  const minusAmount = (id) => {
    setCart(item => {
      item.map(item => {
        if(item.id === id){
          item.total -= 1
          return item
        }
      })
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
