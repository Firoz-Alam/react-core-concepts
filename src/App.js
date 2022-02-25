import logo from './logo.svg';
import './App.css';

function App() {
  let name = {
    name : "Firoz",
    lname : "Alam"
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello {name.name + " "+name.lname}</h1>
       
      </header>
    </div>
  );
}

export default App;
