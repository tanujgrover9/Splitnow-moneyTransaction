import React from 'react'
import './stats.css'

const Stats = (props) => {
  return (
    <div className='main'>
   

      <div className="stats">
      <div className='stats-type' >
      <div className='head'>
      {/* <i class="fa-solid fa-users fa-lg"></i> */}
      <img src={props.img}></img>
      <p className='about'>{props.about}</p>

      </div>
      <div className='head-count'>
    
      <h2 className='count'>{props.count}</h2>
      <p className='shares'><i class="fa-solid fa-caret-down fa-flip-vertical fa-xl"></i> {props.percent}</p>
      </div>
      <div className='line'></div>
      <p className='date'>Update: {props.date}</p>
      </div>
      </div>
    </div>
  )
}

export default Stats
