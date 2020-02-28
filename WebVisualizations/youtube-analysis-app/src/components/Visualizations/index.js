// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import VisualizationLink from '../VisualizationLink';
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
        <h3><i class="fab fa-youtube"></i> Visualizations</h3>
        <hr/>
        <div className="row">
          <VisualizationLink image={timeUSBarChart} link="/plots/1" activePlot={activePlot} />
          <VisualizationLink image={timeOUSBarChart} link="/plots/2" activePlot={activePlot} />
          <VisualizationLink image={tagsPieChart} link="/plots/5" activePlot={activePlot} />
          <VisualizationLink image={tagsBarChart} link="/plots/6" activePlot={activePlot} />
          <VisualizationLink image={categoryUSPieChart} link="/plots/3" activePlot={activePlot} />
          <VisualizationLink image={categoryOUSPieChart} link="/plots/4" activePlot={activePlot} />
        </div>
      </div>
    </div>
  )
}
