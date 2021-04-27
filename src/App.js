import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search</h1>
      <h2>Enter the name of the city below.</h2>
      <Weather />
      <p className="Source-code">
        <a href="https://github.com/cbruzelius/weather-react-app" target= "blank">Open Source Code </a>
         Created by: Cari Bruzelius
      </p>
      </header>
      
    </div>
  );
}

export default App;
