import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
        <div className="App">
          <h2 className="bg-primary m-0 p-3">Recommendation System</h2>
          <Navbar />
          <Main />
        </div>
  );
}

export default App;
