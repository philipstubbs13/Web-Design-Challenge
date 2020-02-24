// @ts-nocheck
import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand ml-5 navbar-title" href="#">
        YouTube Trending Analysis
      </a>
      <div className="collapse navbar-collapse ml-auto ml-4" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-item nav-link ml-5 mr-5 nav-item" href="#" >Plots</a>
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
    </nav>
  )
}
