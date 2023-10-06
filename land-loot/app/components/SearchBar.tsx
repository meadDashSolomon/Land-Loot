import React from "react";

interface SearchBarProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  fetchPlaces: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setLocation, fetchPlaces }) => {
  const [localLocation, setLocalLocation] = React.useState("");

  const handleSearch = () => {
    setLocation(localLocation);
    fetchPlaces();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a city, state, or country..."
        value={localLocation}
        onChange={(e) => setLocalLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
