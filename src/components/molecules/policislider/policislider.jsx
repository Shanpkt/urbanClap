/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef, useState } from 'react';
import './policislider.scss';

//import images from "../../data/policie.json"




const Slider = ({images}) => {
    const screeSize= window.innerWidth;
  const [startIndex, setStartIndex] = useState(0);
  const [boxsize,setboxsize]=useState() 
  const [mobile,setmobile]=useState(false)
  const [index,setindex]=useState(0)
  const [scrolleftvalue,setscrollleftvalue]=useState(0)
  const [gap,setgap]=useState(20)
  const box=useRef()
  const myimg=useRef()

  const slide=<div  className='img_box'>
    {images[1].urls.map((e)=>{
 return(<div className={images[0].image_class}>
     { e.topHeading && <div className='topHeading_vlass'><h4>{e.topHeading}</h4></div>}
    <img ref={myimg}   src={e.imgurl}/>
    {e.botomHeading && <div><h4>{e.botomHeading}</h4></div>}
    </div>)
    })}
</div>
  const scrollright = () => {
    const topOffset = box.current.scrollLeft
    console.log('Scroll Position:', index,topOffset);
      if (box.current) {
        mobile?box.current.scrollLeft =index*( scrolleftvalue+gap): box.current.scrollLeft =index*( scrolleftvalue+gap);
       // setscrollleftvalue(index*(scrolleftvalue+250+gap))
  
       !mobile?setindex(index+images[0].skip_index):setindex(index+1)

      }
      
    };

    const scrollleft = () => {
          if (box.current) {
            console.log(index)
            const revIndex=index-images[0].skip_index
            console.log(revIndex)
            mobile?box.current.scrollLeft =revIndex*( scrolleftvalue+gap): box.current.scrollLeft =revIndex*( scrolleftvalue+gap);
           // setscrollleftvalue(index*(scrolleftvalue+250+gap))
      
           !mobile?setindex(index-images[0].skip_index):setindex(index+1)
    
          }
          
        };
   

    useEffect(()=>{
 
          addjustment() 

    },[])


    function addjustment(){
        if(screeSize<400)
        {
            box.current.style.width="250px"
            //setgap(0)
            myimg.current.style.width="100px"
            setindex(images[0].skip_index)
            setmobile(true)
        }else{
            setindex(images[0].skip_index)
            setscrollleftvalue(images[0].image_width)
        }
    }

    
    
  return (
    <div className="slider-container">
       <div className='buttonBox'> <button onClick={scrollleft}>click</button></div>
        <div ref={box} className='slider-container_box'>
            {slide}
           
        </div>
    
       <div className='buttonBox'><button className='right_button' onClick={scrollright}></button></div> 
    </div>
  );
};

export default Slider;
