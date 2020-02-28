import React from 'react';
import './Footer.css';

export default function Footer() {
  const dt = new Date();
  return (
    <div className="card-footer mt-5 text-center footer pt-4 pb-4">
      &copy; Copyright Phil Stubbs {dt.getFullYear()}
    </div>
  )
}
