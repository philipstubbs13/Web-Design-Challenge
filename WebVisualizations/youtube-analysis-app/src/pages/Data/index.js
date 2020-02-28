import React from 'react';
import Table from './Table';

export default function Data() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h3><i class="fas fa-database"></i> Data</h3>
              <hr />
              <p>
                The following table shows a sample (~50 rows) of the data that the YouTube API returns and that was used for plotting during this project.
              </p>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
