//import logo from './logo.svg';
import logo from './shodan-test-board.jpg';
import './App.css';
import Skills from './skills.js';
import Subscribers from './subscribers.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        //<img src={logo} className="shodan-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Slowly
        </a>
      </header>
      <Subscribers/>
      <Skills/>
    </div>
  );
}

export default App;
