import { Col, Container, Row } from "react-bootstrap"

const PokemonMoves = ({ moves }) => {
  return (
    <>
        <Container>
          <h1 className="display-6">Moves</h1>
          <Row xs={2 } sm={3} md={4} lg={5}>
            {moves.map((move) => (
              <Col key={move.move.name} style={{fontSize: "0.875rem", paddingLeft: ".5rem"}}>
                <ul className="m-1 p-0">
                  <li className="list-unstyled text-capitalize">{move.move.name}</li>
                </ul>
              </Col>
            ))}
          </Row>
        </Container>
      
    </>
  )
}

export default PokemonMoves;
