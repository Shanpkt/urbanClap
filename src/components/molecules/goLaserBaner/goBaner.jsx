import React from 'react'
import "./goLaserBaner.scss"
function GoBaner({banner}) {
  return (
    <div className='laser_banner'>
        <div>
            <img src={banner}/>
        </div>
    </div>
  )
}

export default GoBaner