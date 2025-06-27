import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/Home/Home"
import { Events } from "./pages/Events"
import { Trails } from "./pages/Trails"
import { Waterfalls} from "./pages/WaterFalls"
import { Biodiversity } from "./pages/Biodiversity"
import { Season } from "./pages/Season"
import { Login } from "./pages/Login"
import { ADMTrails } from "./pages/ADMTrails"
import { ADMEvents } from "./pages/ADMEvents"
import { ADMWaterfalls } from "./pages/ADMWaterFalls/ADMWaterFalls"
import { ADMSeason } from "./pages/ADMSeason/ADMSeason"
import { ScrollToTop } from "./service/ScrollToTop"

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/eventos" element={<Events/>}/>
      <Route path="/trilhas" element={<Trails/>}/>
      <Route path="/cachoeiras" element={<Waterfalls/>}/>
      <Route path="/biodiversidade" element={<Biodiversity/>}/>
      <Route path="/temporada" element={<Season/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/adm-trilhas" element={<ADMTrails/>}/>
      <Route path="/adm-eventos" element={<ADMEvents/>}/>
      <Route path="/adm-cachoeiras" element={<ADMWaterfalls/>}/>
      <Route path="/adm-temporada" element={<ADMSeason/>}/>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App
