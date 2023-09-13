import React from 'react'

const Filter = ({filterData, category, setCategory}) => {
  function filterHandler(title){
    setCategory(title)
  }
  return (
    <div className='w-11/12 mx-auto flex flex-wrap justify-center max-w-max space-x-4 gap-y-4 py-4'>
      {
        filterData.map( (data)=>(
          <button
          onClick={()=>{
            filterHandler(data.title)
          }}
           key={data.id}
          className={`bg-black text-white font-medium px-2 py-1 rounded-md hover:bg-opacity-50 transition-all duration-300 border-2 ${category === data.title ? "border-white bg-opacity-60" : "border-transparent bg-opacity-40"}`}
          >{data.title}
          </button>
        ))
      }
    </div>
  )
}

export default Filter

