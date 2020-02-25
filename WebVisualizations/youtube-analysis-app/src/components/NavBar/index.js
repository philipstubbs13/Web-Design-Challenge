// @ts-nocheck
import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
import { plots } from '../../data/plotData';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand ml-5 navbar-title" href="#">
        YouTube Trending Analysis
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ml-auto ml-4" id="navbarNavAltMarkup">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-item" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Plots
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                {plots && plots.length && plots.map(plot => (
                  <Link key={plot.id} to={`/plots/${plot.id}`}>
                    <a key={plot.id} className="dropdown-item">{plot.menu_title}</a>
                  </Link>
                ))}
              </div>
            </li>
            <Link to="/comparison">
              <button className="nav-item nav-link ml-5 mr-5 nav-item btn btn-link" type="button" >
                Comparison
              </button>
            </Link>
            <Link to="/data">
              <button className="nav-item nav-link ml-5 mr-5 nav-item btn btn-link" type="button" >
                Data
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
