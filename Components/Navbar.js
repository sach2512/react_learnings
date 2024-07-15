import React, { useState } from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
 const Title= (
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9AIyWJnv-qeoSVFHoDSoWPoYpqTm_vWoxcg&s" className="h-20 w-20 pt-5 pl-3   " alt="img"></img>
    </div>
)
export default Navbar =(props)=>{
   const cartdetails= useSelector(store=>store.cart.items)
   console.log(cartdetails);
    
    return(
        
       
        <div className="main-container flex justify-between font-bold  bg-pink-100 shadow-xl h-28" >
            
            {Title}  
            
            <h1>{props?.user?.email}</h1>
            
            <ul  className="flex pt-12 px-2 " >
  
                <Link to ="/"><li className="list-none px-12 " >Home </li></Link>
                <Link to ="/about"><li   className="list-none px-14">About</li></Link>
               
                 <Link to="/contact"> <li  className="list-none px-14" >Contact</li></Link>
                 <Link to="/instamart"> <li  className="list-none px-14" >Instamart</li></Link>
                
                
                <li  className="list-none px-14" >Cart {cartdetails.length}</li>
                
            </ul>
        </div>
    )
}