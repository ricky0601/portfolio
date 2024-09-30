import './App.css';
import './components/Header/Header.css';
import './components/Main/Main.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';

function App(){
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
