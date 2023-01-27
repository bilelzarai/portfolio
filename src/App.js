// import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import './App.scss'
import Home from './components/home/home';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Home/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
