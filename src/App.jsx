import { Cover } from "./components/Cover"
import { FeaturedTrail } from "./components/FeaturedTrail/FeaturedTrail"
import { NavBar } from "./components/NavBar/NavBar"
import { SectionBio } from "./components/SectionBio/SectionBio"
import { SectionEvent } from "./components/SectionEvent/SectionEvent"

function App() {

  return (
    <>
      <NavBar />
      <Cover />
      <SectionBio/>
      <SectionEvent/>
      <FeaturedTrail/>
    </>
  )
}

export default App
