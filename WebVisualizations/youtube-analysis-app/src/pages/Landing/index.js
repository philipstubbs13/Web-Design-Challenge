// @ts-nocheck
import React from 'react'
import './Landing.css';
import Visualizations from '../../components/Visualizations';
import Summary from '../../components/Summary';

export default function Landing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-5">
          <Summary />
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
          <Visualizations />
        </div>
      </div>
    </div>
  )
}
