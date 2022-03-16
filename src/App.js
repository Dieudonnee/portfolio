import Home from './components/Home'
import Navbar from "./components/Navbar"
import Style from "./App.module.scss"

import {
    BrowserRouter,
  Routes,
  Route,
 
} from 'react-router-dom'
import Portfolio from "./components/Portfolio"
import About from "./components/About" 
import Footer from "./components/Footer" 
import Contact from "./components/Contact" 


function App() {
  return (
    <BrowserRouter classNames={Style.app}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Portfolio" element={<Portfolio/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
