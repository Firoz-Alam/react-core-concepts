import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const hero = ['Razzak','Salman','Alamgir','Faruk','Manna'];
  const game = [{name:'circket',players:'eleven'},
  {name:'football',players:'eleven'},
  {name:'tenis',players:'four'}
]

  return (
    <div className="App">
      <header className="App-header">
   
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
       
        <ul>
          {hero.map(nayok => <li>{nayok}</li>)}
        </ul>

        <ul>
          {game.map(name=><li>{name.name}</li>)}
        </ul>
        {game.map(item => <GameType game={item}></GameType>)}
       <GameType game = {game[0]}></GameType>
       <GameType game = {game[1]}></GameType>
        
      </header>
    </div>
  );
}

function Counter(){
  const [count,setCount] = useState(0);
  const handleButton = ()=> {
   
    setCount(count + 1);
  }
  return(
<div>
    <h1>Count: {count} </h1>
    <button onClick={()=>{setCount(count +1)}}>Increase</button>
    <button onClick={()=>{setCount(count -1)}}>Decrease</button>
  </div>
  );
}

function Users(){
  const [users,setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  })
  return(
    <div>
      <h2>Dynamic Users: {users.length}</h2>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    </div>
    
  )
}



function GameType(props){
  const styleGame = {
    border:'1px solid orange',
    backgroundColor:'lightGray',
    height:'250px',
    width:'200px',
    margin:'10px',
    borderRadius:'20px'

    
  }
  const {name,players} = props.game;
  console.log(name,players)
  return(
    <div style={styleGame}>
      <h2>{name}</h2>
      <h5>{players}</h5>
      <button>Buy Now</button>
    </div>
  );
}


export default App;
