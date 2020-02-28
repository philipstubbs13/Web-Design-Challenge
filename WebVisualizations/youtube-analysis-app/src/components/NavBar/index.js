// @ts-nocheck
import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
import { plots } from '../../data/plotData';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand ml-5 navbar-title" href="/#">
        <i className="fab fa-youtube"></i> YouTube Trending Insights
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ml-auto ml-4" id="navbarNavAltMarkup">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <li className="nav-item dropdown ml-2">
              <a className="nav-link dropdown-toggle nav-item" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-chart-bar"></i> Plots
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {plots && plots.length && plots.map(plot => (
                  <Link key={plot.id} to={`/plots/${plot.id}`} className="dropdown-item">
                    {plot.menu_title}
                  </Link>
                ))}
              </div>
            </li>
            <Link to="/comparison" className="ml-2">
              <button className="nav-item nav-link ml-5 mr-5 nav-item btn btn-link" type="button" >
                <i className="fas fa-compress-alt"></i> Comparison
              </button>
            </Link>
            <Link to="/data" className="ml-2">
              <button className="nav-item nav-link ml-5 mr-5 nav-item btn btn-link" type="button" >
                <i className="fas fa-database"></i> Data 
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
