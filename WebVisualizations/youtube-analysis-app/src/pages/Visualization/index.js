// @ts-nocheck
import React, { useMemo, useState } from 'react'
import './Visualization.css';
import timeUSBarChart from '../../Images/time_of_day_us.png';
import Visualizations from '../../components/Visualizations';
import { plots } from '../../data/plotData';

export default function Visualization(props) {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const [plotObject, setPlotObject] = useState(null);
  
  useMemo(() => {
    let foundPlot = null;
    foundPlot = plots.find(plot => plot.id === match.params.id)
    setPlotObject(foundPlot)
  }, [id])


    if (plotObject) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h3>{plotObject.title}</h3>
                  <hr/>
                  <img className="text-wrap landing-image" src={timeUSBarChart} />
                  <p>{plotObject.description}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mt-5">
              <Visualizations activePlot={plotObject.id} />
            </div>
          </div>
        </div>
      )
    }
  
}