import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Cadastro from './pages/Cadastro';
import Vagas from './pages/Vagas';
import Lista from './pages/Lista';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact Component={Home}/>
        <Route path="/cadastro" exact Component={Cadastro}/>
        <Route path="/vagas" exact Component={Vagas}/>
        <Route path="/lista" exact Component={Lista}/>
      </Routes>
    </Router>
  );
}

export default App;
