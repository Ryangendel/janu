export const Dog =(props)=>{
    console.log(props)
  
    return(
        <div>
            My dogs name is {props.name} she is {props.age} and her id is {props.id}
        <button onClick={props.sayName}>
                Say name
         </button> 
        </div>
    )
}