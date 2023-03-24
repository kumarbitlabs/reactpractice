import React, { useState, useEffect } from "react";

const SearchFilter = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      {searchResults.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default SearchFilter;