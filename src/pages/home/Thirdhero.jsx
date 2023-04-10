import React from 'react'
import Img15 from '../../assets/pokeBanner.jpg'

const Thirdhero = () => {
  return (
<section class="bgcontainer position-relative">

<div class="container text-center position-relative">
<p className='span13'>LATEST UPDATES </p>
  <div class="row">
    <div class="col img14 paddingall4" id='box1image' >
    <span className='span13'>1 of 2</span>
    </div>
    <div class="col img15 paddingall4" id='box1image'>
    <span className='span13'>2 of 2</span>
    </div>
  </div>
  <div class="row">
    <div class="col img16 paddingall4" id='box2image'>
    <span className='span13'>1 of 3</span>
    </div>
    <div class="col img17 paddingall4" id='box2image'>
    <span className='span13'>2 of 3</span>
    </div>
    <div class="col img18 paddingall4" id='box2image'>
    <span className='span13'>3 of 3</span>
    </div>
    {/* <div id='divblank'></div> */}
  </div>
</div>
</section>  
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

// const [show, setShow] = useState(false);

{/* <>
    
<Container>
<div className='span31'><span></span></div> 
  <Row md={4}>
    <Col> 
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Tcg1} />
  <Card.Body>
    <Card.Title>Pokémon TCG:</Card.Title>
    <Card.Text>
    Primal Clash Mega Aggron.
    </Card.Text>
    
    <Button variant="primary" onClick={() => setShow(true)}>Go somewhere</Button>
    

  </Card.Body>
</Card>
    </Col>



    <Col xs={6} className='padding30'>        
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Tcg2} />
  <Card.Body>
    <Card.Title>Pokémon TCG:</Card.Title>
    <Card.Text>
    Primal Clash Mega Gardevoir.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>

    <Col className='padding30'>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Tcg3} />
  <Card.Body>
    <Card.Title>Pokémon TCG:</Card.Title>
    <Card.Text>
    Primal Clash Primal Kyogre
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
   </Col>

   <Col className='padding30'>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Tcg4} />
  <Card.Body>
    <Card.Title>Pokémon TCG:</Card.Title>
    <Card.Text>
    Primal Clash Primal Groudon
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
   </Col>
  </Row>
</Container>
</> */}