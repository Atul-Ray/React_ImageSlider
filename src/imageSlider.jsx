import React, { useEffect, useState } from 'react'

function ImageSlider() {

const [images , setImages]=useState([]);
const [currentIndex , setCurrentIndex]=useState(0)

    useEffect( ()=>{
    const fetchData= async ()=>{
      const response= await fetch(" https://picsum.photos/v2/list")
     const data=await response.json()
     setImages(data)
    }

    fetchData()
 },[])

 function handleprev() {
    setCurrentIndex((prev)=>(prev<=0?images.length-1:prev-1))
    
    
    console.log(images[currentIndex]);
    
    
 }

 function handlenext() {
    setCurrentIndex((prev)=>(prev>=images.length-1?0:prev+1))
 }


  return (
    <div className='w-4/5 h-4/5 max-[400px]:h-2/5 relative bg-zinc-600'>

 
{
   images.length && 
   <img 
   className='w-full max-[870px]:h-full'
   src={images[currentIndex].download_url}/>
   
}
    <span  className=' ml-2 font-semibold absolute top-1/2 left-0 transform backdrop-blur-sm p-2 bg-white/30 rounded-lg'><button  onClick={handleprev}>prev</button></span>
    <span className='mr-2 font-semibold absolute top-1/2 right-0 transform p-2 bg-white/40 rounded-lg ' > <button onClick={handlenext}>next</button>
    </span>

   </div>
  )
}

export default ImageSlider


