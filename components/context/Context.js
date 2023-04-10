import { useState, useEffect, createContext } from 'react';
import datas from "../../public/worklist.json"

const Context = ({ children }) => {
  const [data, setData] = useState(datas);

  useEffect(() => {
    // async function fetchData() {
    //   const res = await fetch(datas);
    //   const jsonData = await res.json();
    //   setData(jsonData);
    // }
    // fetchData();
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export const DataContext = createContext({});
export default Context;


