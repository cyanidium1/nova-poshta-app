import React, { useState } from "react";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform your search logic, e.g., fetching data from an API
    // For this example, we'll just update the searchResults state with the searchTerm
    setSearchResults([searchTerm]);
  };

  return (
    <div>
      <h1>Пошук по трекінг-номеру</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tracking number..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
