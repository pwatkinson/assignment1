import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Select from './components/Select/Select';
import TextArea from './components/TextArea/TextArea';
import Input from './components/Input/Input';

const myButton = () => {
	console.log("This is a button")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
		
        <Button handleClick={myButton}>
          <div>
            <span>Success</span>
          </div>
        </Button>
        
        <Card>
          <h2>Greetings</h2>
          <p>Hello World!</p>
        </Card>
        
        <Input value="Enter name"/>

		    <Select color="success">
				  <option value="volvo">Volvo</option>
				  <option value="saab">Saab</option>
				  <option value="mercedes">Mercedes</option>
				  <option value="audi">Audi</option>
		    </Select>

        <TextArea color="success" placeholder = "Enter text" />
		
      </header>
    </div>
  );
}

export default App;
