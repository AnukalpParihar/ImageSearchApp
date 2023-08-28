import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./components/SearchBar";
import ImageGrid from "./components/ImageGrid";
import { fetchImages } from "./redux/actions";
import Select from "react-select"; // Import react-select
import "./App.css";

const options = [
  { value: 2, label: "2 Columns" },
  { value: 3, label: "3 Columns" },
  { value: 4, label: "4 Columns" },
  { value: 5, label: "5 Columns" },
];

function App() {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  const [selectedOption, setSelectedOption] = useState(options[1]); // Default selection
  const [lastSearchTerm, setLastSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState([]); // Initialize search history state

  const handleSearch = (query) => {
    dispatch(fetchImages(query));
    setLastSearchTerm(query);
    setSearchHistory((prevHistory) => [query, ...prevHistory]); // Update search history
  };

  const handleSelectChange = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <div className="container">
      <h1 className="title">Image Search App</h1>
      <p>Made by Anukalp Parihar</p>
      <SearchBar
        fetchImages={handleSearch}
        initialSearchQuery={lastSearchTerm}
        searchHistory={searchHistory} // Pass search history
      />
      <p className="separator-paragraph">Select Column No</p>
      <div className="select-container">
        <Select
          options={options}
          value={selectedOption}
          onChange={handleSelectChange}
        />
      </div>
      <ImageGrid images={images} columns={selectedOption.value} />
    </div>
  );
}

export default App;
