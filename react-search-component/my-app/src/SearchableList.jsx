import React, { useState } from 'react';
import './SearchableList.css';

export default function SearchableList({ items }) {
  const [filterTerm, setFilterTerm] = useState('');

  const handleFilter = (event) => {
    setFilterTerm(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(filterTerm.toLowerCase())
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
      {filteredItems.length > 0 ? (
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items match the filter.</p>
      )}
    </div>
  );
}
