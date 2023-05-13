// import './App.css';
// import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import './App.scss'
import Candidate from './components/candidats/candidate';
// import SignIn from './components/sign-in/sign-in';
// import Home from './components/home/home';
function App() {
  return (
    <div className="app">
      <Navbar className="navbar" />
      test
      <Candidate className="app-sign" />
      {/* <header className="App-header">
        <Home/>
        <Footer/>
      </header> */}
    </div>
  );
}

export default App;
