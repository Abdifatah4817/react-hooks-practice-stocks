import React from "react";

function SearchBar({ onSortChange, onFilterChange }) {
  function handleSortChange(e) {
    onSortChange(e.target.value);
  }

  function handleFilterChange(e) {
    onFilterChange(e.target.value);
  }

  return (
    <div>
      <strong>Sort By:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          onChange={handleSortChange}
        />
        Price
      </label>

      <br />
      <strong>Filter:</strong>
      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Tech">Tech</option>
        <option value="Finance">Finance</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Energy">Energy</option>
      </select>
    </div>
  );
}

export default SearchBar;
