import React from 'react'
import './timeline.css'
export default function Extensionright(props) {
  return (
    <section>
    <div className="extension-container">
        <div></div>
        <div></div>
        <div className="box3">
            <svg xmlns="http://www.w3.org/2000/svg" width="134" height="134" viewBox="0 0 134 134" fill="none">
                <circle cx="67" cy="67" r="65" stroke="#C4C4C4" stroke-width="4" />
                <circle cx="67.0002" cy="67" r="48.8524" stroke="#C4C4C4" stroke-width="1.2" stroke-linecap="round"
                    stroke-linejoin="round" stroke-dasharray="10 10" />
            </svg>
            <div className="content">
                <p id="date">{props.event.date}</p>
                <p id="month">{props.event.month}</p>
            </div>
        </div>
        <div className="box2">
            <svg xmlns="http://www.w3.org/2000/svg" width="202" height="2" viewBox="0 0 202 2" fill="none">
                <path className="line4"
                d="M1 0.5C0.723858 0.5 0.5 0.723858 0.5 1C0.5 1.27614 0.723858 1.5 1 1.5L1 0.5ZM1 1.5L202 1.49998L202 0.499982L1 0.5L1 1.5Z"
                fill="#9C41FF"/>
            </svg>
        </div>
        <div className="box1">
            <div id="box1-line-wrapper">
                <h3>{props.event.title}</h3>
                <img id="line3"
                    src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1698111663/Line_3_tque7e.png"
                    alt=""/>
            </div>
            <p id="duration">Duration - 15 oct to {props.event.date_end}</p>
        </div>
        <div></div>
        <div></div>
        <div className="box6">
            <div className="line1"></div>
        </div>
    </div>
    </section>
  )
}
