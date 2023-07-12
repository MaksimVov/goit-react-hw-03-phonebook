import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onFilterChange }) => {
  const handleChange = e => {
    onFilterChange(e.target.value);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input onChange={handleChange} type="text" value={filter} />
    </div>
  );
};

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
