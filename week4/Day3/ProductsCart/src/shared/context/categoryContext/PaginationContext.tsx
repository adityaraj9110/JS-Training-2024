import { ReactNode, createContext, useContext, useState } from "react";

interface PaginationContextType {
  page: number;
  offset: number;
  setPageNumber: (pageNumber: number) => void;
  setOffsetNumber: (offSetNumber: number) => void;
}

const PaginationContext = createContext<PaginationContextType>({
  page: 1,
  offset: 20,
  setPageNumber: () => {},
  setOffsetNumber: () => {},
});

export const usePagination = (): PaginationContextType => {
  return useContext(PaginationContext);
};

interface PaginationProviderProps {
  children: ReactNode;
}

export const PaginationProvider = ({ children }: PaginationProviderProps) => {
  const [page, setPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>(20);

  const setPageNumber = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const setOffsetNumber = (offsetNumber: number) => {
    setOffset(offsetNumber);
  };

  // The object passed as the value prop to the Context provider changes every render. To fix this consider wrapping it in a useMemo hook
  // warning, do not schedule anything just do it......., future me kbhi glti nhi hogi...
  return (
    <PaginationContext.Provider
      value={{ page, offset, setPageNumber, setOffsetNumber }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
