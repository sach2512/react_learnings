

import { useState } from "react";
import { useEffect } from "react";
import ShimmerCardList from "./Shimmerui";
import { Link } from "react-router-dom";
import { Resturant_Url } from "../constant";
import  useOnline  from "../utils/useOnline";
export default HeroSection =()=>{
    const[resturant,setresturant]=useState([])
    const [filterdata,setfilterdata]=useState([])
    const [search,setsearch]=useState("")

    let getdata = async function(){
        let data = await fetch (Resturant_Url)
        let resturant = await(data.json())
        console.log(resturant);
        setresturant(resturant)
        setfilterdata(resturant)
    }
    useEffect(()=>{
        getdata()
        
        return ()=>{
            console.log("this is like  unmounting which will clear mess up ")
        }
    },[])

    function inputchange(e){
        setsearch(e.target.value);
    }

  
    const searchresturant = (search) => {
        const filterdata = resturant.filter((item) => 
          item.restaurant_name.toLowerCase().includes(search.toLowerCase())
        );
        
        setfilterdata(filterdata)
        return filterdata;
      }

const isonline = useOnline();
if(!isonline){
    return <h1>u r offline </h1>
    
}
        if(!resturant){
            return null;
        }
    return (resturant.length===0)?<ShimmerCardList/>:(
        <>
     
         <div className="search-container  p-5 bg-pink-50 my-5 " >
    <input type="text " alt="search " placeholder="search" className="focus:bg-green-200"  onChange={inputchange}  ></input>
    <button className="search-btn p-2 m-5 bg-purple-200 rounded-lg" onClick={()=> searchresturant(search)} >Search </button>
     </div>
        
     {filterdata.length === 0 ? (
    <h1>No restaurants found</h1>
) : (
    <div className="container flex flex-wrap" >
        {filterdata.map((item, index) => (
            <Link to={"/menu/" + item.restaurant_id} key={index}>
                <div className="card w-120 h-100 p-4 border border-red-300 m-8 shadow-xl bg-gray-100 rounded-lg">
  <div className="card-header">
    <img
      src={item.restaurant_thumb}
      alt={item.restaurant_name}
      className="w-full h-48 object-cover rounded-t-lg"
    />
  </div>
  <div className="card-body p-4">
    <h1 className="text-lg font-semibold text-gray-800">Restaurant Name: {item.restaurant_name}</h1>
  </div>
  <div className="card-footer p-4 border-t border-red-300">
    <h1 className="text-md font-semibold text-gray-600">Rating: {item.average_rating} stars</h1>
  </div>
</div>

            </Link>
        ))}
    </div>
)}

      
        
         
      
       </>
     
    );
        
    
}
  