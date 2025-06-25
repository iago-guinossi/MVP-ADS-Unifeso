import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/Home/Home"
import { Events } from "./pages/Events"
import { Trails } from "./pages/Trails"
import { Waterfalls} from "./pages/WaterFalls"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/eventos" element={<Events/>}/>
      <Route path="/trilhas" element={<Trails/>}/>
      <Route path="/cachoeiras" element={<Waterfalls/>}/>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App
