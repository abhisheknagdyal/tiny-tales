import { createContext, useState } from "react";

export const DataContext = createContext ({
    data : [],
    setData : () => null
});

export const DataProvider = ({children}) => {
    const [data ,setData] = useState([]); 
    const value = {data, setData};

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};