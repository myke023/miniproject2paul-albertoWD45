import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const firsthero = () => {
  return (
<section className="img1" >    
<div className='span28 margintop-60 marginright20' id='marginleft20'><span> HEROES CALLING </span></div>
  <Link to='/pokemon' className="text-decoration-none">
  <Button className="pokemon-btn">
    Explore  Now
  </Button>
  </Link>

</section>
  
      

  )
}

export default firsthero





// import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import img1 from './img1.jpg';

/* <section class="masthead1" role="img" aria-label="Image Description">
<h1>
  The Hero Generator
</h1>
  <button>
    When a hero comes along
  </button>
</section> */

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
