import { Container, Button, DropdownButton, Dropdown, ButtonGroup, Row, Col, Card, Spinner } from "react-bootstrap"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const PokemonList = () => {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon"

  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonList, setPokemonList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [sortingOrder, setSortingOrder] = useState("default")
  const [limit, setLimit] = useState(18)

  // Calculate offset based on current page
  const offset = (currentPage - 1) * limit

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get(`${baseUrl}?limit=450`)
      const results = response.data.results
  
      const pokemonPromises = results.map(async (result) => {
        const pokemonResponse = await axios.get(result.url)
        return pokemonResponse.data;
      });
  
      const pokemon = await Promise.all(pokemonPromises)
      setPokemonList(pokemon)
      setIsLoading(false);
    };
  
    fetchData()
    return
  }, [])
  
  // Filter and sort pokemon list
  const filteredPokemon = pokemonList.filter((pokemon) => pokemon.name.includes(searchTerm.toLowerCase()))
  let sortedPokemon = [...filteredPokemon];
  if (sortingOrder === "a-z") {
    sortedPokemon = filteredPokemon.sort((a, b) => a.name.localeCompare(b.name))
  }
  
  // Calculate total number of pages
  const totalPages = Math.ceil(filteredPokemon.length / limit)
  
  // Calculate current offset based on current page
  const currentOffset = (currentPage - 1) * limit
  
  // Slice the filtered and sorted pokemon list based on the current page and limit
  const slicedPokemon = sortedPokemon.slice(currentOffset, currentOffset + limit)
  
  return (
    <section>
      <Container className=" mt-4 d-flex flex-column flex-md-row justify-content-md-between align-items-center">
        <div className="mx-auto mb-3 m-md-0 d-flex align-items-center">
          <label htmlFor="searchInput">Search</label>
          <input 
            type="text"
            placeholder="Search pokemon.."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <ButtonGroup>
          <DropdownButton as={ButtonGroup} title="Sort By" id="bg-nested-dropdown">
            <Dropdown.Item onClick={() => setSortingOrder("default")}>Default</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortingOrder("a-z")}>A - Z</Dropdown.Item>
          </DropdownButton>
          <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
            Prev
          </Button>
          <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </Button>
        </ButtonGroup>
      </Container>
      <Container>
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
            <Spinner animation="border" role="status">
              <span className="sr-only"></span>
            </Spinner>
          </div>
        ) : (
          <>
            {filteredPokemon.length === 0 ? (
              <h3 className="text-center  mt-5 fw-bold">No Pokemon found.</h3>
            ) : (
              <Row xs={1} sm={2} md={3}>
                {slicedPokemon.map((pokemon) => (
                  <Col key={pokemon.id} className="mt-4">
                    <Link to={`/pokemon/${pokemon.name}`}>
                      <Card>
                        <Card.Img variant="top" src={pokemon.sprites.other["official-artwork"].front_default} />
                        <Card.Body>
                          <Card.Title>{pokemon.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            )}
          </>
        )}
        <Container className="d-flex justify-content-end my-4">
          <ButtonGroup>
            <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
              Prev
            </Button>
            <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </Button>
          </ButtonGroup>
        </Container>
      </Container>
    </section>
  )
}

export default PokemonList
