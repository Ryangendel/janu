
import {useState} from "react"
import logo from './logo.svg';
import './App.css';
import {Dog} from "./Dog"
import {Bike} from "./Bike"

function App() {
  // const [number, setNumber] = useState(22)

  const [dogInventory, setDogInventory] = useState(
    [{name:"Coop bike", image: "https://spotbikes.com/cdn/shop/products/NEW-Rallye-Purple-1A_1600x.png?v=1681321231",price:1018, id:1234},
    {name:"AVD 2.3", image:"https://spotbikes.com/cdn/shop/products/rocker-ss-black-trans_1600x.png?v=1625768927",price:1498, id:1212},
    {name:"AVD 3.1", image:"https://cdn.shopify.com/s/files/1/1430/1526/files/Spot_Ryve_115_Black.jpg?v=1690410185", price:1018, id:1434},
    {name:"Cannondale", image: "https://spotbikes.com/cdn/shop/files/Screenshot2023-05-10at11.22.42AM_530x.png?v=1683739387",price:1200, id:1314},
    {name:"Topstone", image:"https://ep1.pinkbike.org/p6pb15492368/p6pb15492368.jpg" ,price:1175, id:1435},
    {name:"Salsa", image:"https://spotbikes.com/cdn/shop/products/Mayhem-130-Details-21-A_1600x.jpg?v=1679368541" ,price:800, id:1316}
    ])

//ADD CATS FOR HOMEWORK

  // function addDog(){
  //     var newNumber = number + 1
  //     //22
  //   setNumber(newNumber)
  // }

  function deleteItem(event){
   var newBikeInventory = dogInventory.filter((realbikes)=>{
    return realbikes.id!=event.target.id
  })
   setDogInventory(newBikeInventory)
  }

  function userInput(event){
//THIS IS FOR FORMS
  }

    function sayName(){
      console.log("----------")
      console.log("This say name")
    }

  return (
    <div className="App">
      {/* <h1>My dogs name is {number}</h1>
      <button onClick={addDog}>
      Activate Lasers
    </button> */}
    {dogInventory.map((bike) => 
       <Bike name={bike.name} image={bike.image} id={bike.id} deleteItem={deleteItem}/>
      )}
    
    {/* <Dog name={"runa"} age={4} sayName={sayName} breed={"pit"} goodDog={true} color={"blue"} bestfriends={["kiki", "skadi","hunter"]} favFood={{drink:"water", food:"eggs"}}/> */}

      {/* {dogInventory.map((dog) => 
        <Dog key={dog.id} id={dog.id} sayName={sayName} name={dog.name} age={dog.age} />
      )} */}

    </div>
  );
}

export default App;
