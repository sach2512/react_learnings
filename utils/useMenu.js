
import { useState, useEffect } from 'react';
import { Menu_URL } from '../constant';
export const useMenu = (id) => {
    const [menu, setMenu] = useState([]);

    const getMenu = async () => {
        alert(Menu_URL)
        try {
            const response = await fetch(Menu_URL);
            const data = await response.json();
            // Filter menu items based on the restaurant_id matching id from URL params
            const filteredMenu = data.filter(item => item.restaurant_id == id); // Use == to match string to number
            setMenu(filteredMenu);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    }

    useEffect(() => {
        getMenu();
    }, [id]); 

    return menu;
}

 
