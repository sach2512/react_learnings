import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {useMenu} from "../utils/useMenu"
import  useOnline  from "../utils/useOnline";
import { additem,removeitem } from "../utils/cartslice";
import { useDispatch } from "react-redux";
export default function Menu(){
    const { id } = useParams();  // Get the 'id' from URL params
    const dispatch=useDispatch();
     const restaurantMenu =useMenu(id)
     const handleadd=(item)=>{
        dispatch(additem(item));
     }

     const handleremove = (menu_id) => {
        alert(`disaptch ${menu_id}`)
        dispatch(removeitem(menu_id));
    };
    

const isonline = useOnline();
    if(!isonline){
        return <h1>u r offline</h1>
    }
    return (
        <div className="flex flex-wrap gap-4 p-4">
            {restaurantMenu.length > 0 ? (
                restaurantMenu.map((item, index) => (
                    <div key={index} className="flex-1 min-w-[200px] max-w-[calc(25%-1rem)] mt-5">
                        <div className="flex flex-col border-2 border-gray-700 rounded-lg overflow-hidden shadow-lg">
                            <div className="flex-1 p-4">
                                <div className="bg-gray-200 p-4 mb-4">
                                    <h2 className="text-gray-800 text-lg font-semibold">{item.menu_name}</h2>
                                    <p className="text-gray-600">Price: ${item.menu_price}</p>
                                </div>
                                <div className="p-4">
                                    <img
                                        src={item.menu_image}
                                        alt={item.menu_name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <p className="mt-2 text-gray-600">{item.description}</p>
                                </div>
                            </div>
                            <div className="flex gap-2 p-2">
                                <button
                                    className="bg-green-200 text-green-700 border-none rounded px-4 py-2 cursor-pointer"
                                    onClick={() => handleadd(item)}
                                >
                                    Add Item
                                </button>
                                
                                <button className="bg-red-200 text-red-700 border-none rounded px-4 py-2 cursor-pointer" 
                                 onClick={() => {
                                    alert(item.menu_id); // Alert will show when button is clicked
                                    handleremove(item.menu_id); // Remove item will be called after the alert
                                }}>
                                        Remove Item </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No menu items found for restaurant ID: {id}</p>
            )}
        </div>
    );
    
    
    
    
    
}
