import { createContext, useState } from "react";

export const GlobalStatesContext = createContext();

const GlobalStatesProvider = ({ children }) => {
  
  const [currentPage, setCurrentPage] = useState(12);

  return (
    <GlobalStatesContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </GlobalStatesContext.Provider>
  );
};

export default GlobalStatesProvider;
