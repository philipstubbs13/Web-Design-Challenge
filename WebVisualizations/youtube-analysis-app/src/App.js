import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Data from './pages/Data';
import Comparison from './pages/Comparison';
import Visualization from './pages/Visualization';
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
           <Route exact path="/plots/:id" component={Visualization} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
