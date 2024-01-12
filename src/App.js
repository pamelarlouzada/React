import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
    state = {
      name: 'Pamela R Louzada',
      counter: 0
    };


  handlePClick = () => {
    this.setState({ name: 'Júnior'})
  }

  handleAClick = (event) => {
    event.preventDefault();
    const  { counter } = this.state;
    this.setState({ counter: counter + 1})
  }

  render () {
    const { name, counter } = this.state; // same thing that: `const name = this.state.name;` study=(destructuring assignment by javascript) study=(arrow function by javascript)
    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p onClick={this.handlePClick}>  
                Hello World, Hello {name} {counter}
              </p>
              <a onClick={this.handleAClick}
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
