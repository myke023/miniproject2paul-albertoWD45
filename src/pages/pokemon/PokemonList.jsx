import axios from "axios";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PokemonList = () => {
   const [mainUrl, setMainUrl] = useState("https://pokeapi.co/api/v2/pokemon");
   const [pokemonList, setPokemonList] = useState([]);
   const [loading, setLoading] = useState(true);
   const [offset, setOffset] = useState(0);
   const [limit, setLimit] = useState(18);
   const [searchTerm, setSearchTerm] = useState("");
   const [searchResults, setSearchResults] = useState([]);
   const [sortOrder, setSortOrder] = useState("default");
 
   useEffect(() => {
     setLoading(true);
 
     const fetchData = async () => {
       const { data } = await axios.get(`${mainUrl}?offset=${offset}&limit=${limit}`);
 
       const pokemonListData = await Promise.all(data.results.map(async (pokemon) => {
         const pokemonDetailsResponse = await axios.get(pokemon.url);
         return {
           name: pokemon.name,
           image: pokemonDetailsResponse.data.sprites.other.dream_world.front_default
         };
 
       }));
       setPokemonList(pokemonListData);
       setLoading(false);
     };
 
     fetchData();
   }, [mainUrl, offset, limit]);
 
   useEffect(() => {
     const fetchSearchResults = async () => {
       if (searchTerm) {
         setLoading(true);
         const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
         setSearchResults([
           {
             name: data.name,
             image: data.sprites.other.dream_world.front_default
           }
         ]);
         setLoading(false);
       } else {
         setSearchResults(pokemonList);
       }
     };
 
     fetchSearchResults();
   }, [searchTerm, pokemonList]);
 
   const handlePrevClick = () => {
     setOffset(Math.max(offset - limit, 0));
   };
 
   const handleNextClick = () => {
     setOffset(offset + limit);
   };
 
   const handleSearchChange = event => {
     setSearchTerm(event.target.value);
   };
 
   const handleSortChange = event => {
      const sortedList = [...searchResults]; 
      if (event.target.value === "alphabetical") {
        sortedList.sort((a, b) => a.name.localeCompare(b.name));
      }
      setSearchResults(sortedList);
      setSortOrder(event.target.value);
    };
 
   const handleClick = (name, image) => {
     console.log(`You clicked on ${name}`);
   };
 

  return (
   <>
   <Container className="mt-3">
     <Row>
       <Col>
         <Form.Control
           type="text"
           placeholder="Search Pokemon"
           value={searchTerm}
           onChange={handleSearchChange}
         />
       </Col>
       <Col>
            <Form.Control as="select" value={sortOrder} onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="alphabetical">Alphabetical</option>
            </Form.Control>
          </Col>
     </Row>
   </Container>
   {loading ? (
     <div>Loading...</div>
   ) : (
     <Container>
       <Row md={3}>
         {searchResults.map((pokemon, index) => (
           <Col key={index} className="my-3 cursor">
             <Card className="p-3" onClick={() => handleClick(pokemon.name, pokemon.image)}>
               <Card.Img variant="top" src={pokemon.image} className="pokemon-img" />
               <Card.Body>
                 <Card.Title className="text-center text-capitalize">{pokemon.name}</Card.Title>
               </Card.Body>
             </Card>
           </Col>
         ))}
       </Row>
       <Row className="mt-3">
         <Col className="justify-content-center">
           <Button variant="primary" onClick={handlePrevClick} disabled={offset === 0}>
             Prev
           </Button>
           <Button variant="primary" onClick={handleNextClick}>
             Next
           </Button>
         </Col>
       </Row>
      </Container>
      )}
      </> )}

export default PokemonList