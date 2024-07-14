import React from "react";
import {Link} from "react-router-dom"
 const Title= (
    <div>
         {/* style={{
            height:"100px",width:"100px",
        }} */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9AIyWJnv-qeoSVFHoDSoWPoYpqTm_vWoxcg&s" className="h-20 w-20 pt-5 pl-3   " alt="img"></img>
    </div>
)
export default Navbar =(props)=>{
   
    
    return(
       
        <div className="main-container flex justify-between font-bold  bg-pink-100 shadow-xl h-28" >
            {/* //style={{display:"flex",justifyContent:"space-between",border:"1px solid black"}} */}
            {Title}  
            
            <h1>{props?.user?.email}</h1>
            
            <ul  className="flex pt-12 px-2 " >
            {/* {{display:"flex",justifyContent:"space-between"}} */}
                <Link to ="/"><li className="list-none px-12 " >Home </li></Link>
                <Link to ="/about"><li   className="list-none px-14">About</li></Link>
               
                 <Link to="/contact"> <li  className="list-none px-14" >Contact</li></Link>
                 <Link to="/instamart"> <li  className="list-none px-14" >Instamart</li></Link>
                <li  className="list-none px-14" >Cart</li>
                {/* style={{listStyle:"none",margin:"20px"}} */}
                
            </ul>
        </div>
    )
}