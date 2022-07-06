import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import News from './components/News/News';
import Registry from './components/Registry/Registry';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Registry />
      <News />
      <Footer />
    </div>
  );
}

export default App;
