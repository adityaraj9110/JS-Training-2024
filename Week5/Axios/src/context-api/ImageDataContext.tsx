import { ReactNode, createContext, useContext, useState } from "react";
import { ResponseData } from "../data-type/DataType";

interface ImageContextType{
    imageItems: ResponseData[] | undefined;
    setImageItems:(data:ResponseData[])=>void;
}

const imageDataContext = createContext<ImageContextType>({
    imageItems:[],
    setImageItems:()=>{},
})

export const useImageDataContext = ():ImageContextType =>{
    return useContext(imageDataContext);
}

interface ImageDataProviderProps {
    children: ReactNode;
}

export const ImageDataProvider = ({children}:ImageDataProviderProps)=>{
    const [imageItems, setImageItems] = useState<ResponseData[] | undefined>(undefined);
    return (
        <imageDataContext.Provider value={{imageItems,setImageItems}}>
            {children}
        </imageDataContext.Provider>
    )
}