import React from 'react'

export default function Summary() {
  return (
    <div className="card">
      <div className="card-body">
        <h3><i className="fab fa-youtube"></i> Summary: YouTube Trending Insights</h3>
        <hr/>
        <img className="text-wrap landing-image image img-fluid rounded" src={process.env.PUBLIC_URL+ "/images/time_of_day_us.png"} alt="Average number of likes and comments vs number of trending videos at different times of day in the US." />
        <p>
          YouTube is one of the largest search engines and one of the largest social media platforms. It has been around for awhile now, but it is still growing in terms of number of videos being uploaded, number of content creators, and number of content consumers. It is used by people all over the US and around the world. 
        </p>
        <p>
          People use YouTube for a variety of reasons, such as watching music videos, learning how to do something new, watching sports highlights, or just watching random videos for entertainment.
        </p>
        <p>
          There is so much data available on all sorts of videos on YouTube. This project digs deeper into characteristics that videos (in particular, trending videos) share. After gathering the information, we used that data to uncover some observations into what makes up a trending video and some insights for how a YouTube content creator can improve their viewer engagement (likes, comments, dislikes, etc).
        </p>
        <p>
          For this project, the YouTube API and data sources from Kaggel were used to uncover patterns about trending videos. This project mostly focuses on videos within the United States, but this project also takes a look at comparing the United States to other countries around the world.
        </p>
      </div>
    </div>
  )
}
