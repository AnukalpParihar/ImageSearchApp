import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ setSearchQuery, fetchImages, initialSearchQuery, searchHistory }) {
  const [query, setQuery] = useState(initialSearchQuery || '');

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchImages(query);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    fetchImages(suggestion);
  };

  // Get the last 3 items from the searchHistory array
  const lastThreeSearches = searchHistory.slice(-3);

  return (
    <div className="search-bar-container">
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
      <div className="search-history-container">
        {lastThreeSearches.length > 0 && (
          <div className="search-history">
            <p>Search History:</p>
            <ul>
              {lastThreeSearches.map((item, index) => (
                <li key={index} onClick={() => handleSuggestionClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
