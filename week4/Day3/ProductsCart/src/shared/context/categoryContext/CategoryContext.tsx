import { createContext, useState, useContext, ReactNode, useMemo } from "react";

interface CategoryContextType {
  selectedCategory: string | undefined;
  selectCategory: (category: string | undefined) => void;
}

const CategoryContext = createContext<CategoryContextType>({
  selectedCategory: undefined,
  selectCategory: () => {},
});

export const useCategory = (): CategoryContextType => {
  return useContext(CategoryContext);
};

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
 
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );


  const contextValue = useMemo<CategoryContextType>(() => ({
    selectedCategory,
    selectCategory: (category: string | undefined) => {
      setSelectedCategory(category);
    }
  }), [selectedCategory]);



  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};
