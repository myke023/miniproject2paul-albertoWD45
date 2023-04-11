import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Spinner } from "react-bootstrap"

import PokemonCard from "./pokemonCard/PokemonCard"
import Pagination from "./pagination/Pagination"
import PokemonFilterDropdown from "./dropdownFilter/PokemonFilterDropdown"
import SearchBar from "./search/SearchBar"
import UsePokemonData from "../hooks/UsePokemonData"

const PokemonList = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortingOrder, setSortingOrder] = useState("default")
  const [typeFilter, setTypeFilter] = useState(null)

  const { pokemonList, isLoading } = UsePokemonData()

  const limit = 18;
  const offset = (currentPage - 1) * limit;

  const filteredList = pokemonList
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (pokemon) =>
        !typeFilter ||
        pokemon.types.some((type) => type.type.name === typeFilter)
    )
    .sort((a, b) => {
      if (sortingOrder === "default") {
        return 0;
      } else if (sortingOrder === "ascending") {
        return a.id - b.id;
      } else if (sortingOrder === "descending") {
        return b.id - a.id;
      }
    })

  const paginatedList = filteredList.slice(offset, offset + limit)

  const allTypes = Array.from(
    new Set(
      pokemonList.flatMap((pokemon) =>
        pokemon.types.map((type) => type.type.name)
      )
    )
  );
 
  const linkStyle = {
    textDecoration: "none"
  };


  return (
    <section>
      <Container className="my-5 py-4">
        <Row xs={1} lg={3} className="align-items-center">
          <Col>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </Col>
          <Col className="d-sm-flex justify-content-sm-start d-lg-block mt-md-3 mt-lg-0">
            <PokemonFilterDropdown
              allTypes={allTypes}
              typeFilter={typeFilter}
              setTypeFilter={setTypeFilter}
            />
          </Col>
          <Col>
            <Pagination
              totalResults={filteredList.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              limit={limit}
            />
          </Col>
        </Row>
        <Container>
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center" style={{height: "20vh"}}>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : filteredList.length ? (
            <Row xs={1} sm={2} md={3}>
              {paginatedList.map((pokemon) => (
                <Col key={pokemon.id} className="mt-4">
                  <Link to={`/pokemon/${pokemon.name}`} style={linkStyle}>
                    <PokemonCard pokemon={pokemon} className="pokemonCard"/>
                  </Link>
                </Col>
              ))}
            </Row>
          ) : (
            <div className="d-flex justify-content-center align-items-center" style={{height: "40vh"}}>
              <h3 className="text-center">No matching Pokemon found</h3>
            </div>
          )}
        </Container>
        <Container className="mt-4">
          <Pagination
            totalResults={filteredList.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            limit={limit}
          />
        </Container>
      </Container>
    </section>
  )
}

export default PokemonList
