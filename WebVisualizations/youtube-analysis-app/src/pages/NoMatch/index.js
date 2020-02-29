import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>
          404
        </h1>
        <h2>Page Not Found</h2>
        <i className="far fa-frown fa-6x"></i>
        <p className="mt-3">
          Oops! Sorry about that.
        </p>
        <p>
          The page you are looking for doesn't exist, was deleted, or moved. <br/> Go back in the direction in which you came from <br/> or just click <b><Link className="alt-link" to="/youtube-insights">here</Link></b> and will get you back on track.
        </p>
      </div>
    </div>
  )
}
