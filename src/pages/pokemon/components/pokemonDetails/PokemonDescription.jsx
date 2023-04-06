const PokemonDescription = ({ description }) => {
  return (
    <div className="description mb-5 mb-lg-0">
      <h1 className="display-6">Description</h1>
      <p>{description}</p>
    </div>
  );
};

export default PokemonDescription;
