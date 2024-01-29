import React from 'react'
import Slider from '../policislider/policislider'
import "./sliderWrapper.scss"
function SliderWrapper({images}) {
  return (
    <div  className='wrapper'>
       { images[0].topBannerHeading && <div className='slider_info'>
        <div>
        <h4>{images[0].bannerInfo[0].heading}</h4>
        <h5>{images[0].bannerInfo[0].subHeading}</h5>
        </div>
           
            <button>See all</button>
        </div>}
        <Slider images={images} />

    </div>
  )
}

export default SliderWrapper