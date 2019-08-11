import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchMenu from './components/SearchMenu';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <SearchMenu />
    </div>
  );
}

export default App;
