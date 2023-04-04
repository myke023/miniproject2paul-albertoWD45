const PokemonDescription = ({ description }) => {
  return (
    <div className="description mb-3">
      <h1 className="display-6">Description</h1>
      <p>{description}</p>
    </div>
  );
};

export default PokemonDescription;
