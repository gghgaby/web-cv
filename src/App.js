import React from 'react';
import PersonalHeader from './components/PersonalHeader';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Projects from './pages/Projects';
import DATA from './StaticData';
import './App.css';

function App() {
  const handleClick = (evt => {
    evt.preventDefault();
    debugger
    window.location.href = evt._dispatchInstances.key;
  });
  return (
    <div className="App">
      <PersonalHeader
      title="Gaby Guzman"
      iterables={DATA.icons}
      handleClick={handleClick}
      ></PersonalHeader>
      <div className="container-app">
        <Home
          title="Hello"
          subtitle="I'm Gabriela Guzman"
          paragraph="Front End Developer"
          otherText="Based on México / Open for remote jobs"
          me='me.png'
        ></Home>
        <Projects
          title="Some projects & articles..."
          cards={DATA.projects}
        ></Projects>
        <footer>
          <div className="copyright-msg">
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank"><img alt="Licencia de Creative Commons" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>.
            <span>©2020 Gaby Guzman. Creative Commons License</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
