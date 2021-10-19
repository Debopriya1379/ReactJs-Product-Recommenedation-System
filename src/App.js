import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import CartState from './context/CartState';

function App() {
  return (
    <>
      <CartState>
        <div className="App">
          <h2 className="bg-primary m-0 p-3">Recommendation System</h2>
          <Navbar />
          <Main />
        </div>
      </CartState>
    </>
  );
}

export default App;
