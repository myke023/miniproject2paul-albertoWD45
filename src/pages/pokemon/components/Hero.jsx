import { Container } from "react-bootstrap"

const Hero = () => {
  return (
    <section className="poke-hero d-flex justify-content-center align-items-center">
     <Container className="poke-hero-text text-white text-center">
      <h1 className="display-4 fw-bold">Discover Your Pokémon Heroes</h1>
      <p className="h5 mt-4">Introducing your favourite Pokémon! Browse through the list below to find your top picks, and click on any card to reveal more details about each one</p>
     </Container>
    </section>
  )
}

export default Hero