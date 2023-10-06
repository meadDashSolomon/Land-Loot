"use client";

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import AttractionTypeSelector from "./components/AttractionTypeSelector";
import SortAlgorithmSelector from "./components/SortSelector";
import PlacesList from "./components/PlacesList";

const Home: React.FC = () => {
  const [location, setLocation] = useState("");
  const [attractionType, setAttractionType] = useState("All");
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    try {
      const res = await fetch(
        `/api/places?location=${location}&attractionType=${attractionType}`
      );
      const data = await res.json();
      setPlaces(data.places);
    } catch (error) {
      console.error("Failed to fetch places:", error);
    }
  };

  return (
    <div>
      <h1>Welcome to Land Loot</h1>

      <SearchBar setLocation={setLocation} fetchPlaces={fetchPlaces} />

      <AttractionTypeSelector
        attractionType={attractionType}
        setAttractionType={setAttractionType}
      />
      <SortAlgorithmSelector />

      {places.length > 0 && <PlacesList places={places} />}
    </div>
  );
};

export default Home;
