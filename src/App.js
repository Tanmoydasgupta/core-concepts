import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <p>MY react app</p>
         <Counter></Counter>
         <Users> </Users>
        
         <Person name="Tommy Shelby"   job="BusinessMan"></Person>
         <Person name="Arthar Shelby"  job="BusinessMan"></Person>
         
         </header>
    </div>
  );
  
}
function Counter(){
  const[count, setCount] = useState(20); 
  // const handleIncrease= () => setCount(count + 1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      
    </div>
  )
  }
  function Users(){
    const[users,setUsers]= useState([]);
    useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data =>setUsers(data));
    })
    return(
    <div>
      <h3>Dynamic user{users.length}</h3>
      <ul>
       
        {
          users.map(user=> <li>{user.name}</li>)
        }
      </ul>
    </div>
    )
  }
function Person(props){
  return (<div style={{border:'2px solid gold' , width:'400px',margin:'20px'}}>
    <h3>My name: {props.name} </h3>
    <p>My Profession: {props.job} </p>
  </div>)
}

export default App;
