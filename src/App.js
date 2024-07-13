import './App.css';
import Connect from './components/Connect';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
