import './App.css';
import HeaderComponent from './components/Header/HeaderComponent'
import AboutMe from './components/AboutMe/AboutMe';
import ContactBar from './components/ContactBar/ContactBar';
import TopButton from './components/TopButton';
import Skills from './components/Skills/Skills';
import './styles/Header.css'
import './styles/AboutMe.css'
import './styles/ContactBar.css'
import './styles/TopButton.css'

function App() {
  return (
    <>
      <HeaderComponent />
      <main>
        <AboutMe />
        <Skills />
      </main>
      <ContactBar />
      <TopButton />
    </>
  );
}

export default App;
