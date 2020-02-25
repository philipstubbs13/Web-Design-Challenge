// @ts-nocheck
import React from 'react'
import './Landing.css';
import timeUSBarChart from '../../Images/time_of_day_us.png';
import timeOUSBarChart from '../../Images/time_of_day_us.png'
import tagsPieChart from '../../Images/percentage_videos_no_tags.png';
import tagsBarChart from '../../Images/popular_tags_us_2018.png';
import categoryUSPieChart from '../../Images/top_trending_videos_by_category_us.png';
import categoryOUSPieChart from '../../Images/top_trending_videos_by_category_ous.png';

export default function Landing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-5">
          <div className="card">
            <div className="card-body">
              <h3>Summary</h3>
              <hr/>
              <img class="text-wrap landing-image" src={timeUSBarChart} />
              <p>
                YouTube is one of the largest search engines and one of the largest social media platforms. It is used by people all over the US and around the world. People use YouTube for a variety of reasons, such as watching music videos, learning how to do something new, watching sports highlights, or just watching random videos for entertainment.
              </p>
              <p>
                Because of the popularity of YouTube, we decided to dig a little deeper into some of the characteristics that videos (in particular, trending videos) share. After gathering the information, we used that data to uncover some observations into what makes up a trending video and some insights for how a YouTube creator can improve their viewer engagement (likes, comments, dislikes, etc).
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
          <div className="card">
            <div className="card-body">
              <h3>Visualizations</h3>
              <hr/>
              <div className="row">
                <div className="col-md-6">
                  <img src={timeUSBarChart} class="visualization-image" />
                </div>
                <div className="col-md-6">
                  <img src={timeOUSBarChart} class="visualization-image" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <img src={tagsPieChart} class="visualization-image" />
                </div>
                <div className="col-md-6">
                  <img src={tagsBarChart} class="visualization-image" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <img src={categoryUSPieChart} class="visualization-image" />
                </div>
                <div className="col-md-6">
                  <img src={categoryOUSPieChart} class="visualization-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
