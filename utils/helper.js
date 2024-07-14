export const searchresturant = (search) => {
    const filterdata = resturant.filter((item) => 
      item.restaurant_name.toLowerCase().includes(search.toLowerCase())
    );
    
    setfilterdata(filterdata)
    return filterdata;
  };