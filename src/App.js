import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import TechnologiesList from './Components/TechnologiesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div>
        <TechnologiesList />
        </div>
        
    </div>
  );
}

export default App;
