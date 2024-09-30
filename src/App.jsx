
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import "./index.css"
import Home from './Components/Views/Home'
import Books from './Components/Views/Books'
import About from './Components/Views/About'
import Villans from './Components/Views/Villans'
import Details from './Components/Views/Details'
import Faviourte from './Components/Views/Faviourte'

function App() {

  return (
<>
<Router>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/books" element={<Books/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/villans" element={<Villans/>}/>
<Route path="/details" element={<Details/>}/>
<Route path="/favourite" element={<Faviourte/>}/>



</Routes>
</Router>

</>
  )
}

export default App
