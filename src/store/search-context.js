import React, { useState } from "react";

export const SearchContext = React.createContext();

function SearchProvider(props) {
  const [value, setValue] = useState("");

  const valueHandler = (val) => {
    setValue(val);
  };

  const defValue = {
    searchTerm: value,
    setSearchTerm: valueHandler,
  };

  return (
    <SearchContext.Provider value={defValue}>
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
