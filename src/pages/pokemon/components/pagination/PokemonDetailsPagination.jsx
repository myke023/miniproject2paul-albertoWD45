import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const PokemonDetailsPagination = ({ prevPokemon, nextPokemon }) => {
  return (
    <div className="d-flex justify-content-between">
      {prevPokemon && (
        <Link to={`/pokemon/${prevPokemon}`}>
          <Button className="pokemon-btn">Prev Pokemon</Button>
        </Link>
      )}
      {nextPokemon && (
        <Link to={`/pokemon/${nextPokemon}`}>
          <Button className="pokemon-btn">Next Pokemon</Button>
        </Link>
      )}
    </div>
  );
};

export default PokemonDetailsPagination;
