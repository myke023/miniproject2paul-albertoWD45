import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const UsePokemonDetails = () => {
   const [pokemon, setPokemon] = useState(null)
   const [prevPokemon, setPrevPokemon] = useState(null)
   const [nextPokemon, setNextPokemon] = useState(null)
   const { name } = useParams()
 
   useEffect(() => {
     const fetchPokemon = async () => {
       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
       setPokemon(response.data)
 
       if (response.data.id === 1) {
         setPrevPokemon(null)
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

       const enDescriptionResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${response.data.id}/`)
       const enDescription = enDescriptionResponse.data.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text
       setPokemon(prevState => ({...prevState, enDescription}))
     };
 
     fetchPokemon()
   }, [name]);
 
   return { pokemon, prevPokemon, nextPokemon }
}

export default UsePokemonDetails;
