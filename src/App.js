
import { useState, useEffect } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home"
import AboutUs from "./AboutUs"
import Inventory from "./Inventory"
import InventorySingle from "./InventorySingle"
import {useREIContext, REIContextProvider} from "./utils/REIContext"


function App() {

  return (
    <div className="router">
      <REIContextProvider>
        {1+1==3?<h1>way to go</h1>:<h1>youre wrong</h1>}
     <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/inventory" element={<Inventory />}/>
        <Route path="/inventory/:productId/:productName" element={<InventorySingle />}/>
      </Routes>
     </Router>
     </REIContextProvider>
    </div>
  );
}

export default App;
