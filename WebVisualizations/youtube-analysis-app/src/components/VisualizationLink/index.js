import React from 'react';
import { Link } from 'react-router-dom';
import './VisualizationLink.css';

export default function VisualizationLink(props) {
  const { image, link, activePlot } = props;
  const visualization_id = link.replace( /^\D+/g, '');
  return (
    <div className="col-md-6">
      <Link to={link}>
        <img
          src={image}
          style={{ padding: '30px !important' }}
          className={(visualization_id === activePlot  ? 'active-visualization visualization-image' : 'visualization-image')} />
      </Link>
    </div> 
  )
}
