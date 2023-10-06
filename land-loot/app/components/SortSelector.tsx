"use client";

import React, { useState } from "react";

const SortSelector: React.FC = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("MostReviews");

  const handleAlgorithmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlgorithm(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sortAlgorithm">Select Sort Algorithm: </label>
      <select
        id="sortAlgorithm"
        value={selectedAlgorithm}
        onChange={handleAlgorithmChange}
      >
        <option value="MostReviews">Most Reviews</option>
        <option value="Best">Best</option>
      </select>
    </div>
  );
};

export default SortSelector;
