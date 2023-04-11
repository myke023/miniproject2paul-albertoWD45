import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"

const About = () => {
  return (
      <Container className="about-section rounded">
         <div className="about-content">
            <div className="intro">
               <h1 className="fw-bold display-6">About</h1>
               <p>
                  Get ready to embark on an epic journey of discovery! Our website, built with passion by the dynamic duo of <span className="fw-semibold">Paul Michael Miranda</span> and <span className="fw-semibold">Alberto Deñiros</span>, is your gateway to the amazing world of Pokémon. Our goal is to provide you with all the knowledge and insights you need to become a master trainer and conquer the Pokémon world!
               </p>
            </div>
            <div className="text-content">
               <h5 className="fw-semibold">Your Ultimate Pokémon Resource</h5>
               <p>
                  We are your ultimate source of information on all things Pokémon-related. Whether you're a seasoned trainer or a newbie, we have everything you need to know about Pokémon, their moves, and the items you can use to help them become the strongest they can be.
               </p>
            </div>
            <div className="text-content">
               <h5 className="fw-semibold">Complete Pokémon List with Stats</h5>
               <p>
                  Our website features a comprehensive list of Pokémon from all generations, including their types, abilities, and stats. You can browse through our list to learn more about each Pokémon and discover their strengths and weaknesses    .
               </p>
            </div>
            <div className="text-content">
               <h5 className="fw-semibold">Essential Pokémon Items Guide</h5>
               <p>
                  we also provide information on the various items that you can use to help your Pokémon on their journey. From healing items like potions and berries to battle items like X Attack and Dire Hit, we have everything you need to know about each item and how to use them effectively.
               </p>
            </div>
            <div className="text-content">
               <h5 className="fw-semibold">A Special Thank You to the PokeAPI-Team</h5>
               <p>
                  At PokéWorld, we would like to express our sincere gratitude to the talented developers of <Link to="https://pokeapi.co/">PokeAPI-Team</Link>. Their tireless efforts and dedication to the project have made it possible for us to offer a comprehensive list of Pokémon, their details, and items to our visitors. We are proud to be a part of the amazing community that has come together to make PokeAPI an invaluable resource for all Pokémon enthusiasts. Thank you, <Link to="https://pokeapi.co/">PokeAPI-Team</Link>, for your outstanding work!
               </p>
            </div>
         </div>
      </Container>
  )
}

export default About