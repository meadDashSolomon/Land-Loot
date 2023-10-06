"use client";

import React, { useState } from "react";

interface AttractionTypeSelectorProps {
  attractionType: string;
  setAttractionType: React.Dispatch<React.SetStateAction<string>>;
}

const AttractionTypeSelector: React.FC<AttractionTypeSelectorProps> = ({
  attractionType,
  setAttractionType,
}) => {
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAttractionType(e.target.value);
  };

  return (
    <div>
      <label htmlFor="attractionType">Select Attraction Type: </label>
      <select
        id="attractionType"
        value={attractionType}
        onChange={handleTypeChange}
      >
        <option value="All">All</option>
        <option value="Restaurants">Restaurants</option>
        <option value="Parks">Parks</option>
        <option value="Cafes">Cafes</option>
        <option value="Things To Do">Things To Do</option>
        <option value="Museums">Museums</option>
      </select>
    </div>
  );
};

export default AttractionTypeSelector;
