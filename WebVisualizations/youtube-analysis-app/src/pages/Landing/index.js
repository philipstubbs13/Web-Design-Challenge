// @ts-nocheck
import React from 'react'
import './Landing.css';
import timeUSBarChart from '../../Images/time_of_day_us.png';
import Visualizations from '../../components/Visualizations';

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
                YouTube is one of the largest search engines, one of the largest social media platforms, and is still growing. It is used by people all over the US and around the world. People use YouTube for a variety of reasons, such as watching music videos, learning how to do something new, watching sports highlights, or just watching random videos for entertainment.
              </p>
              <p>
                Because of the popularity of YouTube and the vast amount of data available on videos, we decided to dig a little deeper into some of the characteristics that videos (in particular, trending videos) share. After gathering the information, we used that data to uncover some observations into what makes up a trending video and some insights for how a YouTube creator can improve their viewer engagement (likes, comments, dislikes, etc).
              </p>
              <p>
                For this project, we used the YouTube API and data sources from Kaggel to uncover patterns about trending videos. This project mostly focuses on videos within the United States, but this project also takes a look at comparing the United States to other countries around the world.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
          <Visualizations />
        </div>
      </div>
    </div>
  )
}