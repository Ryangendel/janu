
import {useState} from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  // const [number, setNumber] = useState(22)

  const [dogInventory, setDogInventory] = useState(
    [{name:"Runa", age:4, id:1234},
    {name:"Kiki", age:1, id:1212},
    {name:"Hunter", age:5, id:1434},
    {name:"Nova", age:4, id:1313}]
    )

  // function addDog(){
  //     var newNumber = number + 1
  //     //22
  //   setNumber(newNumber)
  // }

  return (
    <div className="App">
      {/* <h1>My dogs name is {number}</h1>
      <button onClick={addDog}>
      Activate Lasers
    </button> */}
      {dogInventory.map((dog) => 
      <div>my dogs name is {dog.name} and thier age is {dog.age} and their id is {dog.id}</div>
      )}
    </div>
  );
}

export default App;
