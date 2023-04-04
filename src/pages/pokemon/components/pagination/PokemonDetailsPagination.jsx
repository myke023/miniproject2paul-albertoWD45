import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const PokemonDetailsPagination = ({ prevPokemon, nextPokemon }) => {
  return (
    <div className="d-flex justify-content-between">
      {prevPokemon && (
        <Link to={`/pokemon/${prevPokemon}`}>
          <Button variant="primary">Prev Pokemon</Button>
        </Link>
      )}
      {nextPokemon && (
        <Link to={`/pokemon/${nextPokemon}`}>
          <Button variant="primary">Next Pokemon</Button>
        </Link>
      )}
    </div>
  );
};

export default PokemonDetailsPagination;
