import {  ReactNode, createContext, useContext, useState } from "react";

interface SearchContextType {
    searchedItem: string | null;
    setItem:(item: string| null)=> void;
}

const SearchContext = createContext<SearchContextType>({
    searchedItem: null,
    setItem:()=>{},
})

export const useSearch = ():SearchContextType=>{
    return useContext(SearchContext);
}

interface SearchProviderPros{
    children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderPros)=>{
    const [searchedItem,setSearchedItem] = useState<string | null>(null);

    const setItem = (item:string | null)=>{
        setSearchedItem(item);
    }

    return (
        <SearchContext.Provider value={{searchedItem,setItem}}>
            {children}
        </SearchContext.Provider>
    );

};