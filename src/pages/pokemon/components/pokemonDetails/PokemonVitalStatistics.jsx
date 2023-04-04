const PokemonVitalStatistics = ({ height, weight }) => {
  return (
    <div>
      <h1 className="display-6">Vitals</h1>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
    </div>
  )
}

export default PokemonVitalStatistics;
