import React from 'react'
import "./navbar.scss"
import locationimg from "../../../assest/location.svg"
const img='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_144,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1687285683825-e6cf23.jpeg'
function Navbar() {
  return (
    <div className='navbar_box'>
         <img src={img} />
         <div className='inputSelecion_box'>

         <div className='inputSelecion_box__left'>
            <img className='locationimg' srcSet={locationimg}/>
           <input/>
         </div>
         </div>
    </div>
  )
}

export default Navbar