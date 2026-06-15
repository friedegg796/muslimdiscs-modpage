
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom"
import Index from './pages/Index.jsx'
import Changes from './pages/Changes.jsx'
import Downloads from './pages/Downloads.jsx'
import Navbar from './reusablecomponenets/Navbar.jsx'
//import Footer from '/workspaces/214691060/muslimdiscs-modpage/src/componenets/Footer.jsx'

function App() {


  return (
    <>

    <HashRouter>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/Downloads" element={<Downloads/>}/>
        <Route path="/Changes" element={<Changes/>}/>
        </Routes>


    </HashRouter>
   {/* <Footer /> */}
    </>
  )
}

export default App
