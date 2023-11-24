import { createContext, useState } from "react";

export const Context = createContext({
  filteredData: [],
  setFilteredData: () => {},
  isActive: null,
  setIsActive: () => {},
  selectedArea: [],
  setSelectedArea: () => {},
});

function ContextProvider(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [allIsActive,setallIsActive] = useState(true)
  const [selectedArea,setSelectedArea] = useState(['松山區','信義區','大安區','中山區','中正區','大同區','萬華區','文山區','南港區','內湖區','士林區','北投區'])

  const context = {
    filteredData: filteredData,
    setFilteredData: setFilteredData,
    allIsActive: allIsActive,
    setallIsActive: setallIsActive,
    selectedArea: selectedArea,
    setSelectedArea: setSelectedArea,
  };

  return (
    <>
      <Context.Provider value={context}>{props.children}</Context.Provider>
    </>
  );
}

export default ContextProvider;