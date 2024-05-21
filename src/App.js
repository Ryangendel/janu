
import {useState} from "react"
import logo from './logo.svg';
import './App.css';
import {Dog} from "./Dog"

function App() {
  // const [number, setNumber] = useState(22)

  const [dogInventory, setDogInventory] = useState(
    [{name:"Runa", age:4, id:1234},
    {name:"Kiki", age:1, id:1212},
    {name:"Hunter", age:5, id:1434},
    {name:"Nova", age:4, id:1313}]
    )

//ADD CATS FOR HOMEWORK

  // function addDog(){
  //     var newNumber = number + 1
  //     //22
  //   setNumber(newNumber)
  // }

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
    <Dog name={"runa"} age={4} sayName={sayName} breed={"pit"} goodDog={true} color={"blue"} bestfriends={["kiki", "skadi","hunter"]} favFood={{drink:"water", food:"eggs"}}/>

      {dogInventory.map((dog) => 
        <Dog key={dog.id} id={dog.id} sayName={sayName} name={dog.name} age={dog.age} />
      )}

    </div>
  );
}

export default App;
