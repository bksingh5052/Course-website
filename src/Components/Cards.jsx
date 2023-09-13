import React, {useState} from 'react'
import Card from './Card'

const Cards = ({courses,category}) => {
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses(){
    if(category=== 'All'){
      let allCourse = [];
      Object.values(courses).forEach( (array)=>{
        array.forEach( (courseData)=>{
          allCourse.push(courseData)
        })
      })
      return allCourse;
    }
    else{
      return courses[category]
    }
    
  }
  return (
    <div className='flex flex-wrap justify-center'>
      {
        getCourses().map( (course)=>{
          return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        })
      }
    </div>
  )
}

export default Cards
