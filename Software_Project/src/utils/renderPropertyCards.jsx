import PropertyCard from "../components/PropertyCard" // Assuming PropertyCard component is in a separate file

const renderPropertyCards = (properties) => {
  return properties.map(property => (
    <PropertyCard
      key={property.id} // Assuming each property has a unique identifier
      price={property.price}
      title={property.title}
      rooms={property.rooms}
      bathrooms={property.bathrooms}
      squareMeters={property.squareMeters}
    />
  ));
}

export default renderPropertyCards;