import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CRUDExp from './component/crudExp';
import CRUDEd from './component/crudEd';
import CrudProj from './component/crudProj';
import Home from './component/home';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/crudexp' component={CRUDExp} />
        <Route path='/cruded' component={CRUDEd} />
        <Route path='/crudproj' component={CrudProj} />
      </div>
    </Router>
  );
}

export default App;
