import React from 'react';

const SearchBar = ({
  searchTerm,
  onSearchChange,
  selectedType,
  onTypeChange,
  types,
}) => {
  return (
    <div
      className="search-bar"
      style={{
        position: 'fixed',
        top: 110,
        left: 0,
        padding: '1rem',
        zIndex: 9998,
        width: '100%',
        background: 'white',
        boxSizing: 'border-box',
      }}
    >
      <div className="search-controls">
        <input
          type="text"
          placeholder="Search Pokémon"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search Pokémon"
        />
        <select
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          aria-label="Filter by type"
        >
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
