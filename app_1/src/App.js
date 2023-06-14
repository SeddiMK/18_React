import logo from './logo.svg';
import './App.css';

const colorOrange = 'orange';
const myObgStyle = { color: colorOrange, fontFamily: 'Georgia' };

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header big-text">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code style={myObgStyle}>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div></div>
    </>
  );
}

export default App;
