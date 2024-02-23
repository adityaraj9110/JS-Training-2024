import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CategoryProvider } from "./shared/context/categoryContext/CategoryContext.tsx";
import { SearchProvider } from "./shared/context/categoryContext/SearchContext.tsx";
import { CartProvider } from "./shared/context/categoryContext/CartContext.tsx";
import { PaginationProvider } from "./shared/context/categoryContext/PaginationContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  
    <CategoryProvider>
      <SearchProvider>
        <CartProvider>
          <PaginationProvider>
          <App />
          </PaginationProvider>
        </CartProvider>
      </SearchProvider>
    </CategoryProvider>
  
);
