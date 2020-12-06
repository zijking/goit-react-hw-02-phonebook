import React from 'react';

function Filter({ onChange, value }) {
  return (
    <>
      <label>
        Filter:
        <input type="text" name="filter" onChange={onChange} value={value} />
      </label>
    </>
  );
}

export default Filter;
