import React from 'react'
import {Link} from 'react-router-dom'

const firsthero = () => {
  return (
<section className="img1" >    
  <h1>
    HEROES CALLING
  </h1>
  <Link to='/pokemon/kyogre'>
  <button type="button" className='btnclr span20'>
    Explore Now
  </button>
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
