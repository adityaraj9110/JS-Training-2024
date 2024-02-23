
import { ReactNode, createContext, useContext, useState, useMemo, Dispatch, SetStateAction } from "react";

interface CartContextType {
  cartItemId: number[] | null;
  addToCart: (id: number) => void;
  setCartItemId: Dispatch<SetStateAction<number[]>>;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType>({
  cartItemId: [],
  addToCart: () => {},
  setCartItemId: () => {},
  removeFromCart: () => {},
});

export const useCart = (): CartContextType => {
  return useContext(CartContext);
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItemId, setCartItemId] = useState<number[]>([]);

  const contextValue = useMemo<CartContextType>(() => ({
    cartItemId,
    setCartItemId,
    addToCart: (id: number) => {
      setCartItemId(prev => [...prev, id]);
    },
    removeFromCart: (id: number) => {
      setCartItemId(prev => prev.filter(item => item !== id));
    }
  }), [cartItemId, setCartItemId]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
