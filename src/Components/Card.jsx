import React from 'react'
import {FcLike ,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify'

const Card = ({course,likedCourses,setLikedCourses}) => {
  function handleLike(){
    if(likedCourses.includes(course.id)){
     setLikedCourses((prev)=>prev.filter((cid)=>(cid !== course.id)));
     toast.warning('Like removed')
    }
    else if(likedCourses.legth ===0){
      setLikedCourses([course.id])
      toast.success("Liked Success")
    }
    else{
      setLikedCourses((prev)=>[...prev, course.id])
      toast.success("Liked Success")

    }

  }

  let desc = course.description.slice(0,100).concat('...')
  console.log(desc);
  return (
    <div className='w-[300px] bg-[#2A2B44] m-2 rounded-md overflow-hidden text-white'> 
     <div className='relative'>
      <img src={course.image.url} alt="Course Data"/>
      <div className='w-[40px] h-[40px] rounded-full bg-white absolute right-2 -bottom-5 flex justify-center items-center'>
      <button onClick={handleLike}>
        {likedCourses.includes(course.id) ? (<FcLike fontSize='1.75rem'/>):(<FcLikePlaceholder fontSize='1.75rem'/>)}
        
      </button>
     </div>
     </div>
     
     <div className='p-4'>
      <p className='text-lg font-semibold leading-6'>{course.title}</p>
      <p className='mt-2'>{desc}</p>
     </div>
    </div>
  )
}

export default Card
