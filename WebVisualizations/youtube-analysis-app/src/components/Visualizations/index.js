// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import timeUSBarChart from '../../Images/time_of_day_us.png';
import timeOUSBarChart from '../../Images/time_of_day_us.png'
import tagsPieChart from '../../Images/percentage_videos_no_tags.png';
import tagsBarChart from '../../Images/popular_tags_us_2018.png';
import categoryUSPieChart from '../../Images/top_trending_videos_by_category_us.png';
import categoryOUSPieChart from '../../Images/top_trending_videos_by_category_ous.png';

export default function Visualizations(props) {
  const { activePlot } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h3>Visualizations</h3>
        <hr/>
        <div className="row">
          <div className="col-md-6">
            <Link to="/plots/1">
              <img src={timeUSBarChart} className="visualization-image" />
            </Link>
          </div>       
          <div className="col-md-6">
            <Link to="/plots/2">
              <img src={timeOUSBarChart} className="visualization-image" />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/plots/5">
              <img src={tagsPieChart} className="visualization-image" />
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/plots/6">
              <img src={tagsBarChart} className="visualization-image" />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/plots/3">
              <img src={categoryUSPieChart} className="visualization-image" />
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/plots/4">
              <img src={categoryOUSPieChart} className="visualization-image" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
