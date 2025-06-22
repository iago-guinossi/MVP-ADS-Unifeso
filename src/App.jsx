import { Cover } from "./components/Cover"
import { FeaturedTrail } from "./components/FeaturedTrail/FeaturedTrail"
import { NavBar } from "./components/NavBar/NavBar"
import { SectionBio } from "./components/SectionBio/SectionBio"

function App() {

  return (
    <>
      <NavBar />
      <Cover />
      <SectionBio/>
      <FeaturedTrail/>
    </>
  )
}

export default App
