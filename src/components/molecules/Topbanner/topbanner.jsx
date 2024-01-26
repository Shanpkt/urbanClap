import React from 'react'
import './topbanner.scss'
import data from "./data.json"
function Topbanner() {
  return (
    <div className='topBanner_box' >
        <div className='left_Half_optionBox'>
        
        <h4>Home services at your doorstep</h4>
         <div className='option_box'>
            <h4>What are you looking for</h4>
       <div className='optionroll_box'> {data.map((e)=>{
           return(<div className='option_box__element'>
            <div className='img_box'>
            <img src={e.img}/>
            
            </div>
            <h3>{e.name}</h3>
        </div>
)
        })
            
        }</div>

         </div>
            
        </div>
        <div className='right_Half_Banner'>
         <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg'/>
        </div>

    </div>
  )
}

export default Topbanner