import { Col, Row } from "react-bootstrap"
import { typeColors } from "../pokemonCard/TypeOfColor"

const PokemonTypes = ({ types }) => {
  return (
    <div className="pokemon-types my-3">
      <Row>
        <Col className="d-flex align-items-center">
          <h5 className="m-0">Types</h5>
          <ul className="d-flex p-0 my-0 ms-3">
            {types.map(type => (
              <li 
                key={type.type.name} 
                style={{backgroundColor: typeColors[type.type.name]}}
                className="list-unstyled me-3 px-3 py-1 rounded text-capitalize"
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
  </div>
  )
}

export default PokemonTypes;
