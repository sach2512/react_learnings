import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {useMenu} from "../utils/useMenu"
import  useOnline  from "../utils/useOnline";
export default function Menu(){
    const { id } = useParams();  // Get the 'id' from URL params
     const restaurantMenu =useMenu(id)
    // const [restaurantMenu, setRestaurantMenu] = useState([]);

    // const getMenu = async function() {
    //     try {
    //         const data = await fetch("https://raw.githubusercontent.com/sach2512/api_resturant/main/menu.json");
    //         const menu = await data.json();
    //         // Filter menu items based on the restaurant_id matching id from URL params
    //         const filteredMenu = menu.filter(item => item.restaurant_id == id); // Use == to match string to number
    //         setRestaurantMenu(filteredMenu);
    //     } catch (error) {
    //         console.error("Error fetching menu:", error);
    //     }
    // }

    // useEffect(() => {
    //     getMenu();
    // }, [id]);  // Trigger useEffect whenever 'id' changes
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
                         <div style={{ display: "flex", flexWrap: "wrap" }}>
                         <div key={index} className="card" style={{height:"400px",width:"300px",border:"1px solid black",margin:"20px",}}>
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
