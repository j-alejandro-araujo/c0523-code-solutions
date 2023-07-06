import React, { useState } from 'react';
import './SearchableList.css';

export default function SearchableList({ strings }) {
  const [filterTerm, setFilterTerm] = useState('');

  const handleFilter = (event) => {
    setFilterTerm(event.target.value);
  };

  const filteredItems = strings.filter((string) =>
    string.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <label htmlFor="search-here" className="search-header">
        Search Here:
      </label>
      <input
        id="search-here"
        type="text"
        placeholder="Search..."
        value={filterTerm}
        onChange={handleFilter}
      />
      <i className="fas fa-search search-icon"></i>
      {filteredItems.length > 0 ? (
        <ul>
          {filteredItems.map((string, index) => (
            <li key={index}>{string}</li>
          ))}
        </ul>
      ) : (
        <p>No items match the filter.</p>
      )}
    </div>
  );
}
