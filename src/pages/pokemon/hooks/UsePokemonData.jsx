import { useEffect, useState } from "react"
import axios from "axios"

const UsePokemonData = () => {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon"
  const limit = 18

  const [pokemonList, setPokemonList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await axios.get(`${baseUrl}?limit=${limit * 25}`)
      const results = response.data.results

      const pokemonPromises = results.map(async (result) => {
        const pokemonResponse = await axios.get(result.url)
        return pokemonResponse.data;
      })

      const pokemonData = await Promise.all(pokemonPromises)
      setPokemonList(pokemonData);

      setIsLoading(false)
    };

    fetchData();
  }, [])

  return { pokemonList, isLoading }
}

export default UsePokemonData