import Firsthero from './Firsthero'
import Secondhero from './Secondhero'
// import Thirdhero from './Thirdhero'
// import Fourthhero from './Fourthhero'
// import Fifthhero from './Fifthhero'
import Sixthhero from './Sixthhero'
import Leftscroll from './Leftscroll'

const Home = () => {
  return (
    <>
    <Leftscroll />
      <Firsthero />
      <Secondhero />
      {/* <Thirdhero />
      <Fourthhero />
      <Fifthhero /> */}
      <Sixthhero />
    </>
  )
}

export default Home