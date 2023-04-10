import Hero from "./components/Hero"
import PokemonList from "./components/PokemonList"

const Pokemon = () => {
  return (
    <div className="pokemon-list">
      <Hero />
      <PokemonList />
    </div>
  )
}

export default Pokemon