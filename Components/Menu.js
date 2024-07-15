import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {useMenu} from "../utils/useMenu"
import  useOnline  from "../utils/useOnline";
import { additem } from "../utils/cartslice";
import { useDispatch } from "react-redux";
export default function Menu(){
    const { id } = useParams();  // Get the 'id' from URL params
    const dispatch=useDispatch();
     const restaurantMenu =useMenu(id)
     const handleadd=(item)=>{
        dispatch(additem(item));
     }

const isonline = useOnline();
    if(!isonline){
        return <h1>u r offline</h1>
    }
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                
                restaurantMenu.length > 0 ? (
                    restaurantMenu.map((item, index) => (
                        
                        <div key={index} >
                         <div style={{ display: "flex", flexWrap: "wrap" }} >
                         <div key={index} className="card w-72 h-100 p-2   border-solid border-red-300 m-14 shadow-lg bg-red-400"  >
                         <button className="p-2 m-2 bg-green-300" onClick={()=>handleadd(item)}>add item</button>
                            <div className="card-header">
                                <h2 className="menu-name">{item.menu_name}</h2>
                                <p className="menu-price">Price: {item.menu_price}</p>
                            </div>
                            <div className="card-body">
                                <img src={item.menu_image} alt={item.menu_name} className="menu-image" style={{width:"100%",height:"200px"}} />
                                <p className="menu-description">{item.description}</p>
                            </div>
                        </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No menu items found for restaurant ID: {id}</p>
                )
            }
        </div>
    );
}
