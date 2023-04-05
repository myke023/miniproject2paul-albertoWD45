import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tcg1 from '../../assets/tcg1.jpg'
import Tcg2 from '../../assets/tcg2.jpg'
import Tcg3 from '../../assets/tcg3.jpg'
import Tcg4 from '../../assets/tcg4.jpg'

const Thirdhero = () => {
  return (
    <Container>
    <div className='span31'><span> JOIN THE BATTLE OF TRAINERS </span></div> 
      <Row md={4}>
        <Col> 
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Tcg1} />
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
      <Card.Img variant="top" src={Tcg2} />
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
      <Card.Img variant="top" src={Tcg3} />
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
      <Card.Img variant="top" src={Tcg4} />
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

export default Thirdhero



{/* <section class="boximg1" >    
<div >
<h1>
  The Hero Generator
</h1>
  <button>
    When a hero comes along
  </button>
</div>
</section> */}