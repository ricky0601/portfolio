import './App.css';
import HeaderComponent from './components/Header/HeaderComponent'
import AboutMe from './components/AboutMe/AboutMe';
import ContactBar from './components/ContactBar/ContactBar';
import './styles/Header.css'
import './styles/AboutMe.css'
import './styles/ContactBar.css'

function App() {
  return (
    <>
      <HeaderComponent />
      <main>
        <AboutMe />
      </main>
      <ContactBar />
    </>
  );
}

export default App;
