
import { useState, useEffect } from "react"
import {BrowserRouter as Zoo, Routes, Route} from "react-router-dom"
import Home from "./Home"
import AboutUs from "./AboutUs"
import Inventory from "./Inventory"
import InventorySingle from "./InventorySingle"
import {useREIContext, REIContextProvider} from "./utils/REIContext"


function App() {

  return (
    <div className="router">
    <REIContextProvider>
     <Zoo>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/inventory" element={<Inventory />}/>
        <Route path="/inventory/:productId/:productName" element={<InventorySingle />}/>
      </Routes>
     </Zoo>
     </REIContextProvider>
    </div>
  );
}

export default App;
