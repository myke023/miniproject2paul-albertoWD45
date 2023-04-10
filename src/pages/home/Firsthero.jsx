import React from 'react'
import {Link} from 'react-router-dom'

const firsthero = () => {
  return (
<section class="img1" >    
<div   id="boximage" >
<h1><br /><br />
  HEROES CALLING
</h1>
  <Link to='http://localhost:5173/pokemon/kyogre'>
  <button type="button" className='btnclr span20'>
    Explore Now
  </button>
  </Link>
</div>
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
