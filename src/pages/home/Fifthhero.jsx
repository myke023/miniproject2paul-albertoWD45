import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tcg9 from '../../assets/tcg9.jpg'
import Tcg10 from '../../assets/tcg10.jpg'
import Tcg11 from '../../assets/tcg11.jpg'
import Tcg12 from '../../assets/tcg12.jpg'


const fifthhero = () => {
  return (
    <Container>
    <div className='span31'><span></span></div> 
      <Row md={4}>
        <Col> 
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Tcg9} />
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
      <Card.Img variant="top" src={Tcg10} />
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
      <Card.Img variant="top" src={Tcg11} />
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
      <Card.Img variant="top" src={Tcg12} />
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

export default fifthhero
