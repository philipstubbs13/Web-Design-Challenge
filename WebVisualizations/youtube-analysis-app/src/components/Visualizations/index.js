// @ts-nocheck
import React from 'react';
import VisualizationLink from '../VisualizationLink';
import { plots } from '../../data/plotData';

export default function Visualizations(props) {
  const { activePlot } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h3><i className="fab fa-youtube"></i> Visualizations</h3>
        <hr/>
        <div className="row">
          {plots.map(plot => (
            <VisualizationLink
              image={process.env.PUBLIC_URL + `/images/${plot.image}`}
              link={`/plots/${plot.id}`}
              activePlot={activePlot}
              key={plot.id}
              alt={plot.alt}
              title={plot.menu_title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
