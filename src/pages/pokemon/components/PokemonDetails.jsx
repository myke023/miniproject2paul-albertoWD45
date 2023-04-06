import React from "react"
import { Link } from "react-router-dom"
import { Button, Col, Container, Row, Spinner } from "react-bootstrap"
import UsePokemonDetails from "../hooks/UsePokemonDetails"
import PokemonStats from "./pokemonDetails/PokemonStats"
import PokemonCard from "./pokemonCard/PokemonCard"
import PokemonMoves from "./pokemonDetails/PokemonMoves"
import PokemonDescription from "./pokemonDetails/PokemonDescription"
import PokemonTypes from "./pokemonDetails/PokemonTypes"
import PokemonVitalStatistics from "./pokemonDetails/PokemonVitalStatistics"
import PokemonDetailsPagination from './pagination/PokemonDetailsPagination'


const PokemonDetails = () => {
  const { pokemon, prevPokemon, nextPokemon } = UsePokemonDetails();
  if (!pokemon) {
    return(
      <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  return (
    <section className="py-5 my-5 d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
      <Container className="position-relative">
      <PokemonDetailsPagination prevPokemon={prevPokemon} nextPokemon={nextPokemon} />
        <Row xs={1} lg={2} className="my-3">
          <Col className="my-xs-3 my-sm-3 my-lg-0">
            <PokemonCard pokemon={pokemon} />
            <PokemonTypes types={pokemon.types} />    
          </Col>
          <Col className="my-3 my-sm-3 my-lg-0">
            <PokemonDescription description={pokemon.enDescription} />
            <Row>
              <Col>
                <PokemonStats stats={pokemon.stats} />
              </Col>
              <Col>
                <PokemonVitalStatistics height={pokemon.height} weight={pokemon.weight} />  
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="my-4">
          <PokemonMoves moves={pokemon.moves}  />
        </Row>
        <Link to="/pokemon" className="d-flex justify-content-end text-dark mt-4">
          Explore More
        </Link>
      </Container>
    </section>
  );
};

export default PokemonDetails