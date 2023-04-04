import Card from "react-bootstrap/Card"
import { typeColors } from "./TypeOfColor"

const PokemonCard = ({ pokemon }) => {
  const primaryType = pokemon.types[0].type.name
  const backgroundColor = typeColors[primaryType]

  return (
      <Card className="py-3" style={{ backgroundColor }}>
        <Card.Img variant="top" src={pokemon.sprites.other["official-artwork"].front_default} className="pokemon-img" />
        <Card.Body>
          <Card.Title className="pokemon-name text-center" style={{ textTransform: "capitalize"}}>
            {pokemon.name}
          </Card.Title>
        </Card.Body>
      </Card>
  )
}

export default PokemonCard
