import React from 'react';
import PersonalHeader from './components/PersonalHeader';
import Home from './pages/Home';
import './App.css';

function App() {

  const icons = [{link: 'telegram-white.png', desc: 'telegram-white'},{link: 'linkedin-white.png', desc: 'linkedin-white'},{link: 'gmail-white.png', desc: 'gmail-white'},{link: 'git-white.png', desc: 'git-white'} ];

  return (
    <div className="App">
      <PersonalHeader
      title="gabyguzmandev"
      iterables={icons}
      ></PersonalHeader>
      <Home
        title="Hello"
        subtitle="I am Gabriela Guzman"
        paragraph="Front End Developer"
        me='me.png'
      ></Home>

    </div>
  );
}

export default App;
