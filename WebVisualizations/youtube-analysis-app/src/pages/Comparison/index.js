// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import './Comparison.css';

export default function Comparison() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div>
                <h4><i className="fab fa-youtube"></i> How does video publish time affect engagement?</h4>
                <hr />
                <p>
                  Click any plot to get an in-depth analysis.
                </p>
                <div className="row mt-3">
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">US</h4>
                    <Link to="/plots/1">
                      <img src={process.env.PUBLIC_URL+ "/images/time_of_day_us.png"} className="visualization" alt="Average number of likes and comments vs number of trending videos at different times of day in the US." />
                    </Link>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">OUS</h4>
                    <Link to="/plots/2">
                      <img src={process.env.PUBLIC_URL+ "/images/time_of_day_ous.png"}  className="visualization" alt="Average number of likes and comments vs number of trending videos at different times of day in countries outside of the US." />
                    </Link>
                  </div>
                </div>         
              </div>

              <div className="mt-5">
                <h4><i className="fab fa-youtube"></i> Are certain types of videos more likely to make it on the trending list?</h4>
                <hr />
                <p>
                  Click any plot to get an in-depth analysis.
                </p>
                <div className="row mt-3">
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">US</h4>
                    <Link to="/plots/3">
                      <img src={process.env.PUBLIC_URL+ "/images/top_trending_videos_by_category_us.png"} alt="Top trending videos by category in the US"  className="visualization" />
                    </Link>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">OUS</h4>
                    <Link to="/plots/4">
                      <img src={process.env.PUBLIC_URL+ "/images/top_trending_videos_by_category_ous.png"} alt="Top trending videos by category in countries outside of the US." className="visualization" />
                    </Link>
                  </div>
                </div>         
              </div>

              <div className="mt-5">
                <h4><i className="fab fa-youtube"></i> How do tags (keywords) affect number of views?</h4>
                <hr />
                <p>
                  Click any plot to get an in-depth analysis.
                </p>
                <div className="row mt-3">
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">Comedy</h4>
                    <img src={process.env.PUBLIC_URL+ "/images/top_tags_Comedy_US.png"}  className="visualization" alt="Top tags used in comedy videos in the US." />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">Entertainment</h4>
                    <img src={process.env.PUBLIC_URL+ "/images/top_tags_Entertainment_US.png"} className="visualization" alt="Top tags used in entertainment videos in the US." />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">How to and Style</h4>
                    <img src={process.env.PUBLIC_URL+ "/images/top_tags_Howto & Style_US.png"} className="visualization" alt="Top tags used in how to and style videos in the US." />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">Music</h4>
                    <img src={process.env.PUBLIC_URL+ "/images/top_tags_Music_US.png"} className="visualization" alt="Top tags used in music videos in the US." />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">News and Politics</h4>
                    <img src={process.env.PUBLIC_URL+ "/images/top_tags_News & Politics_US.png"} className="visualization" alt="Top tags used in news and politics videos in the US." />
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
