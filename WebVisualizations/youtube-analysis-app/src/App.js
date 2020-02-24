import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Data from './pages/Data';
import Comparison from './pages/Comparison';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
           <Route exact path="/" component={Landing} />
           <Route exact path="/data" component={Data} />
           <Route exact path="/comparison" component={Comparison} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
