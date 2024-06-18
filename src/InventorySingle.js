import { useLocation } from 'react-router-dom';
import {useEffect} from "react"

const InventorySingle =(props)=>{
    const location = useLocation();
    console.log("---------")
    console.log(location.pathname);
    console.log("---------")
    useEffect(()=>{
        // fetch("/ourAPI")
    },[])
    
    return(
        <div>
           THIS IS THE INVENOTRY PAGE
        </div>
    )
}

export default InventorySingle;