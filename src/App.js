import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";

const App = () => {
  const [loading, setLoading] = useState(true)
  const [courses, setCourses] = useState(null)
  const [category, setCategory] = useState(filterData[0].title)

  async function fetchData(){
    setLoading(true)
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data)
    }
    catch(e){
      toast.error('Network Error')
      console.log(e)
    }
    setLoading(false)
  }

 useEffect(() => {
   fetchData()
 }, [])
 

  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
      <div className="w-11/12 max-w-[1200px] flex flex-wrap justify-center items-center mx-auto min-h-[60vh]">
        {
        loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>
    </div> 
  );
};

export default App;
