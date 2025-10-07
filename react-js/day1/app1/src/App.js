import logo from './logo.svg';
// import logo from './earth.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{color:"black",fontFamily:'Times New Roman'}}>Hello I am,</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 style={{fontWeight:'normal',fontFamily:'Times New Roman'}}>
            King Ritesh from Aptur
          </h2>
        </a>
      </header>
    </div>
  );
}

export default App;
