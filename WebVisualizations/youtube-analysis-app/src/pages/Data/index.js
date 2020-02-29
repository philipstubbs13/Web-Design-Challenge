import React from 'react';
import Table from './Table';

export default function Data() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">

              <h3><i className="fas fa-database"></i> About the Data</h3>
              <hr />
              <p>
                The following table shows a sample (~50 rows) of the data that the YouTube API returns and that was used for plotting during this project.
              </p>
              <p>
                This project uses a public kaggle dataset, which is located <a href="https://www.kaggle.com/datasnaek/youtube-new/data" target="_blank" rel="noopener noreferrer">here</a>. This dataset is powered by the YouTube API. It includes various information about trending videos in the US from 2017 to 2018 and includes video information for several other countries as well.
              </p>
              <p>
                This project primarily looks at the US but does compare the US vs OUS for a couple of the visualizations/research questions. The dataset was in the form of csv files (one for each country). The data includes a lot of useful information about each video, such as publish time, number of views, number of likes, and the tags associated with each video. The csv files were merged into one pandas dataframe to do the analysis.
              </p>
              <p>
                The data also includes a <b>category_id</b> field. Retrieveing the category name required hitting an endpoint to the YouTube API to get the additional category data. For more information about specific columns and what they mean, refer to the <a href="https://developers.google.com/youtube/v3/docs/videos/list" target="_blank" rel="noopener noreferrer">YouTube API documentation</a>.
              </p>
              <Table />
           

        </div>
      </div>
    </div>
  )
}
