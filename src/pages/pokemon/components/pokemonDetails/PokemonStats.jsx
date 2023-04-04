const PokemonStats = ({stats}) => {
  return (
    <>
      <h1 className="display-6">Stats</h1>
      {stats.map((stat) => (
        <p key={stat.stat.name} className="text-capitalize">
          {stat.stat.name}: {stat.base_stat}
        </p>
      ))}
    </>
  )
}

export default PokemonStats 