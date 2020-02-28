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
                  These 2 visualizations show the average number of likes/comments/number of trending vidoes versus the time of the day videos were published. The visualization on the left shows the United States. The visualization on the right shows countries outside of the United States.
                </p>
                <p>
                  Click any plot to get an in-depth analysis.
                </p>
                <div className="row mt-3">
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">US</h4>
                    <Link to="/plots/1" target="_blank">
                      <img src={process.env.PUBLIC_URL+ "/images/time_of_day_us.png"} className="visualization" alt="Average number of likes and comments vs number of trending videos at different times of day in the US." />
                    </Link>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">OUS</h4>
                    <Link to="/plots/2" target="_blank">
                      <img src={process.env.PUBLIC_URL+ "/images/time_of_day_ous.png"}  className="visualization" alt="Average number of likes and comments vs number of trending videos at different times of day in countries outside of the US." />
                    </Link>
                  </div>
                </div>         
              </div>

              <div className="mt-5">
                <h4><i className="fab fa-youtube"></i> Are certain types of videos more likely to make it on the trending list?</h4>
                <hr />
                <p>
                  These 2 visualizations compare the top 5 trending video categories between the United States and countries outside of the United States (OUS).
                </p>
                <p>
                  Click any plot to get an in-depth analysis.
                </p>
                <div className="row mt-3">
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">US</h4>
                    <Link to="/plots/3" target="_blank">
                      <img src={process.env.PUBLIC_URL+ "/images/top_trending_videos_by_category_us.png"} alt="Top trending videos by category in the US"  className="visualization" />
                    </Link>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">OUS</h4>
                    <Link to="/plots/4" target="_blank">
                      <img src={process.env.PUBLIC_URL+ "/images/top_trending_videos_by_category_ous.png"} alt="Top trending videos by category in countries outside of the US." className="visualization" />
                    </Link>
                  </div>
                </div>         
              </div>

              <div className="mt-5">
                <h4><i className="fab fa-youtube"></i> How do tags (keywords) affect number of views?</h4>
                <hr />
                <p>
                  These visualizations compare the top 10 tags used among the top 5 video categories on YouTube.
                </p>
                <p>
                  Click any plot to get an in-depth analysis.
                </p>
                <div className="row mt-3">
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">Comedy</h4>
                    <Link to="/plots/7" target="_blank">
                      <img src={process.env.PUBLIC_URL+ "/images/top_tags_Comedy_US.png"}  className="visualization" alt="Top tags used in comedy videos in the US." />
                    </Link>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">Entertainment</h4>
                    <Link to="/plots/8" target="_blank">
                      <img src={process.env.PUBLIC_URL+ "/images/top_tags_Entertainment_US.png"} className="visualization" alt="Top tags used in entertainment videos in the US." />
                    </Link>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">How to and Style</h4>
                    <Link to="/plots/9" target="_blank">
                      <img src={process.env.PUBLIC_URL+ "/images/top_tags_Howto & Style_US.png"} className="visualization" alt="Top tags used in how to and style videos in the US." />
                    </Link>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">Music</h4>
                    <Link to="/plots/10" target="_blank">
                      <img src={process.env.PUBLIC_URL+ "/images/top_tags_Music_US.png"} className="visualization" alt="Top tags used in music videos in the US." />
                    </Link>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 col-sm-12">
                    <h4 className="text-center">News and Politics</h4>
                    <Link to="/plots/11" target="_blank">
                      <img src={process.env.PUBLIC_URL+ "/images/top_tags_News & Politics_US.png"} className="visualization" alt="Top tags used in news and politics videos in the US." />
                    </Link>
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
