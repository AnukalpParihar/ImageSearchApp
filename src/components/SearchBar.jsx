import "../components/SearchBar.css"
import React, { useState, useEffect } from 'react';

function SearchBar({ setSearchQuery, fetchImages, initialSearchQuery }) {
  const [query, setQuery] = useState(initialSearchQuery || '');
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const storedSearchHistory = localStorage.getItem('searchHistory');
    if (storedSearchHistory) {
      setSearchHistory(JSON.parse(storedSearchHistory));
    }
  }, []);

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchImages(query);
      updateSearchHistory(query);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    fetchImages(suggestion);
    updateSearchHistory(suggestion);
  };

  const updateSearchHistory = (newQuery) => {
    const newHistory = [newQuery, ...searchHistory.slice(0, 2)];
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  return (
    <div className="search-bar-container relative"> {/* Add 'relative' class */}
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="search-button" onClick={() => fetchImages(query)}>
          Search
        </button>
      </div>
      <div className="search-history-dropdown absolute w-64 mt-1"> {/* Add 'absolute' and adjust width */}
        {searchHistory.length > 0 && (
          <ul className="bg-white border rounded shadow">
            {searchHistory.map((item, index) => (
              <li
                key={index}
                className="hover:bg-gray-200 cursor-pointer transition duration-200 py-2 px-4"
                onClick={() => handleSuggestionClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
