const PlacesList: React.FC<{ places: any[] }> = ({ places }) => {
  return (
    <ul>
      {places.map((place, index) => (
        <li key={index}>{place.name}</li>
      ))}
    </ul>
  );
};

export default PlacesList;
