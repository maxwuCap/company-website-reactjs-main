import React from 'react';
import ReactDOM from 'react-dom';

function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-12 md-6">
             <iframe src='https://www.zillow.com/view-3d-home/8a3913ee-67b5-4127-aa89-2f0a34d74922/?utm_source=captureapp' id="myIframe">
              <h2>Tour</h2>
             </iframe>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
