import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tcg5 from '../../assets/tcg5.jpg'
import Tcg6 from '../../assets/tcg6.jpg'
import Tcg7 from '../../assets/tcg7.jpg'
import Tcg8 from '../../assets/tcg8.jpg'

const fourthhero = () => {
  return (
    <Container>
    <div className='span31'><span></span></div> 
      <Row md={4}>
        <Col> 
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Tcg5} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={6} className='padding30'>        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Tcg6} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
 </Col>

        <Col className='padding30'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Tcg7} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
       </Col>

       <Col className='padding30'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Tcg8} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
       </Col>
      </Row>
    </Container>
  )
}

export default fourthhero
