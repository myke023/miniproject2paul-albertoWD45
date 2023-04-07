import { Col, Container, Row } from "react-bootstrap"

const PokemonMoves = ({ moves }) => {
  const limitedMoves = moves.slice(0, 15);

  const getRandomColor = () => {
    const colors = ["#D8D8C0", "#FAB38B", "#D99A9A", "#9EC6E3", "#BDBDE6", "#A2DAA9", "#F6E3A7", "#D9B87C", "#F2A1C2", "#D8C288", "#B0E7E7", "#C7D588", "#947BE5", "#A592BB", "#A69885", "#C7C7D8",  "#F5C2D7" ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
      <Container>
        <h1 className="display-6">Moves</h1>
        <Row xs={2 } sm={3} md={4} lg={5}>
          {limitedMoves.map((move) => (
            <Col key={move.move.name} style={{fontSize: "0.875rem", paddingLeft: ".5rem"}}>
              <ul className="my-2 p-0">
                <li className="list-unstyled text-capitalize text-center py-2 rounded" style={{ backgroundColor: getRandomColor() }}>{move.move.name}</li>
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
  )
}

export default PokemonMoves;
