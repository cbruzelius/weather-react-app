import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="Search-engine">
      <header className="Engine-header">
        <h1>Weather Search</h1>
      <h4>Enter a city name.</h4>
      <Weather />
      <p className="Source-code">
        This page was coded by Cari Bruzelius and is {" "}
        <a href="https://github.com/cbruzelius/weather-react-app" target= "blank">open-sourced on github.</a>
      </p>
      </header>
      
    </div>
  );
}

export default App;
