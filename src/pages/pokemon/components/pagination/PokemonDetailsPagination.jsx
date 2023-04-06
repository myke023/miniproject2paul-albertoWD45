import { Link } from "react-router-dom"
import { Button, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const PokemonDetailsPagination = ({ prevPokemon, nextPokemon }) => {
  return (
    <Container className="pokemon-details-pagination position-fixed">
      {prevPokemon && (
        <Link to={`/pokemon/${prevPokemon}`}>
          <Button className="chevron-left"><FontAwesomeIcon icon={faChevronLeft}  /> </Button>
        </Link>
      )}
      {nextPokemon && (
        <Link to={`/pokemon/${nextPokemon}`}>
          <Button className="chevron-right"><FontAwesomeIcon icon={faChevronRight} /> </Button>
        </Link>
      )}
    </Container>
  );
};

export default PokemonDetailsPagination;
