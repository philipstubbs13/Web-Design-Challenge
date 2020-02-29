import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Data from './pages/Data';
import Comparison from './pages/Comparison';
import Visualization from './pages/Visualization';
import NoMatch from './pages/NoMatch';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="app-content">
          <Switch>
            <Route exact path="/youtube-insights" component={Landing} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/data" component={Data} />
            <Route exact path="/comparison" component={Comparison} />
            <Route exact path="/plots/:id" component={Visualization} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
