import { createContext, useContext, useState } from "react";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  return (
    <DataContext.Provider
      value={{
        datas,
        setDatas,
        isDataLoading,
        setIsDataLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

export const useData = () => useContext(DataContext);
