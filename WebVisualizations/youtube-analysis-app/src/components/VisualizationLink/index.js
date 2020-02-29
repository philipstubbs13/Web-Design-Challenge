import React from 'react';
import { Link } from 'react-router-dom';
import './VisualizationLink.css';

export default function VisualizationLink(props) {
  const { image, link, activePlot, alt } = props;
  const visualization_id = link.replace( /^\D+/g, '');
  return (
    <div className="col-md-6 col-sm-3">
      <Link to={link}>
        <img
          src={image}
          className={(visualization_id === activePlot  ? 'visualization-image active-visualization img-fluid rounded mx-auto d-block' : 'visualization-image img-fluid rounded mx-auto d-block')}
          alt={alt}
          />
      </Link>
    </div> 
  )
}
