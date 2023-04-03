import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel';

const Secondhero = () => {
  return (
<Container md>
<Row>
  <Col>
  <div className='span31'><span> JOIN THE BATTLE OF TRAINERS </span></div>
  <Carousel fade>
      <Carousel.Item>
        <section class="img2"> 
          <div id="boximage">
          </div>
        </section>
        <Carousel.Caption>
          <span className='span32'>TEAM VALOR</span>
          <p className='p32'>To enhance Pokemon’s natural power in the pursuit of true strength. There’s no doubt that the Pokemon our team have trained are the strongest in battle! </p>
          <button> JOIN THE LEAGUE!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <section class="img3"> 
          <div id="boximage">

          </div>
        </section>

        <Carousel.Caption>
        <span className='span32'>TEAM MYSTIC</span>
          <p className='p32'>The wisdom of Pokémon is immeasurably deep. I am researching why it is that they evolve. My team? With our calm analysis of every situation, we can't lose!</p>
          <button> JOIN THE LEAGUE!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <section class="img4"> 
          <div id="boximage">

          </div>
        </section>
        <Carousel.Caption>
        <span className='span32'>TEAM INSTINCT</span>
          <p className='p32'>Pokemon are creatures with excellent intuition. I bet the secret to their intuition is related to how they’re hatched. Come on and join my team! You never lose when you trust your instincts!</p>
          <button> JOIN THE LEAGUE!</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </Col>
</Row>
</Container>
  )
}

export default Secondhero

{/* <div className="boximage1" role="img" aria-label="Image Description" >
     

</div> */}


{/* <section class="masthead2" role="img" aria-label="Image Description">
<h1>
  The Hero Generator
</h1>
  <button>
    When a hero comes along
  </button>
</section> */}