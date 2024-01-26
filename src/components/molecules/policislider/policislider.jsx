/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef, useState } from 'react';
import './policislider.scss';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhP-XyutfNneZXRyA5kcDo9LyCcAOeN_-qRg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhP-XyutfNneZXRyA5kcDo9LyCcAOeN_-qRg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhP-XyutfNneZXRyA5kcDo9LyCcAOeN_-qRg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhP-XyutfNneZXRyA5kcDo9LyCcAOeN_-qRg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhP-XyutfNneZXRyA5kcDo9LyCcAOeN_-qRg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhP-XyutfNneZXRyA5kcDo9LyCcAOeN_-qRg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhP-XyutfNneZXRyA5kcDo9LyCcAOeN_-qRg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhP-XyutfNneZXRyA5kcDo9LyCcAOeN_-qRg&usqp=CAU',
  
  
  // Add more image URLs as needed
];

const slide=<div  className='img_box'>
    {images.map((e)=>{
 return(<img  className='images' src={e}/>)
    })}
</div>


const Slider = () => {
    const screeSize= window.innerWidth;
  const [startIndex, setStartIndex] = useState(0);
  const [boxsize,setboxsize]=useState() 
  const [mobile,setmobile]=useState(false)
  const [index,setindex]=useState(1)
  const [scrolleftvalue,setscrollleftvalue]=useState(250)
  const [gap,setgap]=useState(20)
  const box=useRef()
  const scrollByAmount = () => {
    const topOffset = box.current.scrollLeft
    console.log('Scroll Position:', index,topOffset);
      if (box.current) {
        !mobile?box.current.scrollLeft =index*( scrolleftvalue+gap): box.current.scrollLeft =index*( scrolleftvalue+ 250+gap);
       // setscrollleftvalue(index*(scrolleftvalue+250+gap))
       !mobile?setindex(index+4):setindex(index+1)

      }
      
    };
   

    useEffect(()=>{
 
          addjustment() 

    },[])


    function addjustment(){
        if(screeSize<400)
        {
            box.current.style.width="250px"
            setgap(0)
            setindex(1)
            setmobile(true)
        }else{
            setindex(4)
        }
    }

    
    
  return (
    <div className="slider-container">
        <div ref={box} className='slider-container_box'>
            {slide}
           
        </div>
    
        <button onClick={scrollByAmount}>click</button>
    </div>
  );
};

export default Slider;
