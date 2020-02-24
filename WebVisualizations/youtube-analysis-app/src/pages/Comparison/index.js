// @ts-nocheck
import React from 'react';
import timeUSBarChart from '../../Images/time_of_day_us.png';
import timeOUSBarChart from '../../Images/time_of_day_ous.png';
import categoryUSPieChart from '../../Images/top_trending_videos_by_category_us.png';
import categoryOUSPieChart from '../../Images/top_trending_videos_by_category_ous.png';
import topTagsComedy from '../../Images/top_tags_Comedy_US.png';
import topTagsEntertainment from '../../Images/top_tags_Entertainment_US.png';
import topTagsHowto from '../../Images/top_tags_Howto & Style_US.png';
import topTagsNewsPolitics from '../../Images/top_tags_News & Politics_US.png';
import topTagsMusic from '../../Images/top_tags_Music_US.png';

import './Comparison.css';

export default function Comparison() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div>
                <h4>Location Comparison: How does video publish time affect engagement?</h4>
                <hr />
                <p>
                  Click any plot to get an in-depth analysis.
                </p>
                <div className="row mt-3">
                  <div className="col-md-6 col-sm-12">
                    <h4 class="text-center">US</h4>
                    <img src={timeUSBarChart} class="visualization" />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">OUS</h4>
                    <img src={timeOUSBarChart} class="visualization" />
                  </div>
                </div>         
              </div>

              <div class="mt-5">
                <h4>Location Comparison: Are certain types of videos more likely to make it on the trending list?</h4>
                <hr />
                <p>
                  Click any plot to get an in-depth analysis.
                </p>
                <div className="row mt-3">
                  <div className="col-md-6 col-sm-12">
                    <h4 class="text-center">US</h4>
                    <img src={categoryUSPieChart} class="visualization" />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">OUS</h4>
                    <img src={categoryOUSPieChart} class="visualization" />
                  </div>
                </div>         
              </div>

              <div class="mt-5">
                <h4>Category Comparison: How do tags (keywords) affect number of views?</h4>
                <hr />
                <p>
                  Click any plot to get an in-depth analysis.
                </p>
                <div className="row mt-3">
                  <div className="col-md-6 col-sm-12">
                    <h4 class="text-center">Comedy</h4>
                    <img src={topTagsComedy} class="visualization" />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">Entertainment</h4>
                    <img src={topTagsEntertainment} class="visualization" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 col-sm-12">
                    <h4 class="text-center">How to and Style</h4>
                    <img src={topTagsHowto} class="visualization" />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">Music</h4>
                    <img src={topTagsMusic} class="visualization" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 col-sm-12">
                    <h4 class="text-center">News and Politics</h4>
                    <img src={topTagsNewsPolitics} class="visualization" />
                  </div>
                </div>        
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
