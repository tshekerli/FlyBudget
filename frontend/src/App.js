import logo from './logo.svg';
import './App.css';
import LocationSelect from './components/search';

function App() {
  const from = {id: "departure-location", label: "Please select your departure location"}
  return (
    <div className="App">
      
        <LocationSelect {...from} />
      
    </div>
  );
}

export default App;
