import React from 'react'
import './timeline.css'
export default function timeline() {
  return (
    <section>

      <div className="wrapper">
        <h1><b>Timeline</b></h1>
        <div className="container">
          <div className="box1">
            <div id="box1-line-wrapper">
              <h3>Registration Opens</h3>
              <img id="line3" src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1698111663/Line_3_tque7e.png" alt="" />
            </div>
            <p id="duration">Duration - 15 oct to 15 dec</p>
          </div>
          <div className="box2">
            <svg xmlns="http://www.w3.org/2000/svg" width="202" height="2" viewBox="0 0 202 2" fill="none">
              <path className="line4"
                d="M1 0.5C0.723858 0.5 0.5 0.723858 0.5 1C0.5 1.27614 0.723858 1.5 1 1.5L1 0.5ZM1 1.5L202 1.49998L202 0.499982L1 0.5L1 1.5Z"
                fill="#14F195" />
            </svg>
          </div>
          <div className="box3">
            <svg xmlns="http://www.w3.org/2000/svg" width="134" height="134" viewBox="0 0 134 134" fill="none">
              <circle cx="67" cy="67" r="65" stroke="#35E1FF" stroke-width="4" />
              <circle cx="67.0002" cy="67" r="48.8524" stroke="#35E1FF" stroke-width="1.2"
                stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="10 10" />
            </svg>
            <div className="content">
              <p id="date">15</p>
              <p id="month">October</p>
            </div>
          </div>
          <div className="box4">
            <img src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1698111649/Group_762_ijeczd.svg" alt="" />
          </div>
          <div className="box5">
            <div id="ellipse-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="276" height="247" viewBox="0 0 276 247" fill="none">
                <path d="M276 122.838C276 190.971 221.054 246.205 153.275 246.205C123.396 246.205 80.5943 219.613 52.6718 195.905C17.252 165.831 0 133.933 0 95.8345C0 58.2022 51.5256 51.5085 77.9542 28.8803C99.3749 10.5398 122.932 0 153.275 0C183.618 0 216.656 24.5467 238.076 42.8872C264.505 65.5155 276 85.2053 276 122.838Z" fill="#B067FF" />
              </svg>
              <div>
                <p id="ellipse" className="content">Get extra perks with early registration</p>
              </div>
            </div>
          </div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box6">
            <div className="line1"></div>
          </div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    </section>
  )
}
