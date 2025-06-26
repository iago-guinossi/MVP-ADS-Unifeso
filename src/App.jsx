import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/Home/Home"
import { Events } from "./pages/Events"
import { Trails } from "./pages/Trails"
import { Waterfalls} from "./pages/WaterFalls"
import { Biodiversity } from "./pages/Biodiversity/Biodiversity"
import { Season } from "./pages/Season"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/eventos" element={<Events/>}/>
      <Route path="/trilhas" element={<Trails/>}/>
      <Route path="/cachoeiras" element={<Waterfalls/>}/>
      <Route path="/biodiversidade" element={<Biodiversity/>}/>
      <Route path="/temporada" element={<Season/>}/>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App
