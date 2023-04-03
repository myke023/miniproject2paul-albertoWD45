import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"

const PokemonDetails = ({ match }) => {
  const [pokemon, setPokemon] = useState(null);
  let [prevPokemon, setPrevPokemon] = useState(null)
  let [nextPokemon, setNextPokemon] = useState(null)
  const { name } =useParams()

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      setPokemon(response.data)

      if (response.data.id === 1) {
         setPrevPokemon(null);
       } else {
         const prevResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${response.data.id - 1}`)
         if (prevResponse.data) {
           setPrevPokemon(prevResponse.data.name)
         }
       }
     
       const nextResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${response.data.id + 1}`)
       if (nextResponse.data) {
         setNextPokemon(nextResponse.data.name)
       }
    };

    fetchPokemon();
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
      <p>{pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat}</p>
      <p>{pokemon.stats[1].stat.name}: {pokemon.stats[1].base_stat}</p>
      <p>{pokemon.stats[2].stat.name}: {pokemon.stats[2].base_stat}</p>
      <p>{pokemon.stats[3].stat.name}: {pokemon.stats[3].base_stat}</p>
      <p>{pokemon.stats[4].stat.name}: {pokemon.stats[4].base_stat}</p>
      <p>{pokemon.stats[5].stat.name}: {pokemon.stats[5].base_stat}</p>
      <p>Type: {pokemon.types[0].type.name}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      
      {prevPokemon && <Link to={`/pokemon/${prevPokemon}`}>Prev Pokemon</Link>}
      {' '}
      {nextPokemon && <Link to={`/pokemon/${nextPokemon}`}>Next Pokemon</Link>}
    </div>
  );
};

export default PokemonDetails
