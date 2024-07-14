

// import ShimmerCard from "./Shimmerui";
// use state is react way to create variale the main purouse of the react is to change dom very fastly but if we create local variable react wont leep tract of 
//local variable tht is the reason we use suetate to create varibles in react to be in sync with ui

// const  menulist = [
//     {
//         "menu_id": 1,
//         "menu_name": "Garlic Breadsticks",
//         "description": "Baked to perfection. Your perfect pizza partner! Tastes best with dip",
//         "restaurant_id": 1,
//         "menu_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUXV9zBGM5IoGOCymhRfarRGZhEewUapWa9w&s",
//         "menu_type": "vegetarian",
//         "menu_price": "99"
//     },
  
//     {
//         "menu_id": 2,
//         "menu_name": "Margherita Pizza",
//         "description": "Classic cheese and tomato pizza with fresh basil",
//         "restaurant_id": 1,
//         "menu_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Bul1emXroMlFsjLB_pEUJAriwDWxJq82KQ&s",
//         "menu_type": "vegetarian",
//         "menu_price": "199"
//     },
//     {
//         "menu_id": 3,
//         "menu_name": "Chicken Wings",
//         "description": "Spicy and crispy chicken wings served with a tangy dip",
//         "restaurant_id": 1,
//         "menu_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuApmyZp_7T4petcS1fdP_ZFF_oDrpVkePVQ&s",
//         "menu_type": "non-vegetarian",
//         "menu_price": "249"
//     },
//     {
//         "menu_id": 4,
//         "menu_name": "Caesar Salad",
//         "description": "Fresh romaine lettuce with Caesar dressing and croutons",
//         "restaurant_id": 1,
//         "menu_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSokyQxnUvgxSnDIiYvUVOwn4Tl1Aiwsbxczw&s",
//         "menu_type": "vegetarian",
//         "menu_price": "149"
//     },
//     {
//         "menu_id": 5,
//         "menu_name": "Pepperoni Pizza",
//         "description": "Loaded with pepperoni and cheese on a crispy crust",
//         "restaurant_id": 1,
//         "menu_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Bul1emXroMlFsjLB_pEUJAriwDWxJq82KQ&s",
//         "menu_type": "non-vegetarian",
//         "menu_price": "299"
//     },
//     {
//         "menu_id": 6,
//         "menu_name": "Chocolate Shake",
//         "description": "Creamy and delicious chocolate shake",
//         "restaurant_id": 1,
//         "menu_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMMuvNuVgI-xpr-Ffo1iR5hlwhSKNa4ecSw&s",
//         "menu_type": "vegetarian",
//         "menu_price": "149"
//     }
    
    
// ];


// export default  HeroSection = () => {

// const [menu,setmenu]=useState([])
// const [searchtext,setsearchtext] = useState("")
// let [count,setcount]=useState(10)
// console.log("component loading because state is chnaged");
   
   
// useEffect(()=>{
//             console.log("useeffect because there is no dependecy ");
//     }) // if we dnt give any dependecy useeffect is also called at every rerender everystatechnage 
  
//      // when any chnage happen react render whole componwnt and chnages only 
//      //the diiffernce in ui so we get these alert always for all chnages
    
    
// useEffect(()=>{
//         console.log("useeffect with  dependecy ");
// },[])


// useEffect(()=>{
//     console.log("useeffect with searchtext   dependecy ");
// },[searchtext])

// useEffect(()=>{
//     console.log("useeffect with menu  dependecy ");
// },[menu])
    
// // most imp page will render first then useeffect is called 

// // useEffect(()=>{
// //     fetch("https://raw.githubusercontent.com/sach2512/api_resturant/main/api.json")
// //     .then((res)=> res.json())
// //     .then((data)=> console.log(data))
// // },[])

// async  function getresturants (){
//     const data = await fetch("https://raw.githubusercontent.com/sach2512/api_resturant/main/resturant.json")
//     const json = await data.json()
//     console.log(json);
//     setmenu(json);
// }
// useEffect(()=>{
//     getresturants()
// },[])


// function inputchange(e){
//       setsearchtext(e.target.value)
//       console.log("state chnaged because of typing so i am coming again");// for every letter it will rerender 
//     }


// function handleSearch(searchtext) {
//         count=count+1;
//         const filteredMenu = menu.filter(item =>
//             item.menu_name.toLowerCase().includes(searchtext.toLowerCase())
            
//         );
//         setmenu(filteredMenu);
//         setcount(count)
//     }
   
//     // return (menu.length===0)?(<ShimmerCard/>): (
//     return(
//        <>
//          <div className="search-container " style={{margin:"20px"}}>
//     <input type="text" alt="search " placeholder="search" value={searchtext} onChange={inputchange} ></input>
//     <button className="search-btn" onClick={() => handleSearch(searchtext)}>Search {count}</button>
//     </div>
//         <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
         
//          {menu.map((item, index) => (
//            <div key={index} className="card" style={{height:"400px",width:"300px",border:"1px solid black",margin:"20px"}}>
//              <div className="card-header">
//                <img src="" alt={item.menu_name} style={{width:"100%",height:"200px"}} />
//              </div>
//              <div className="card-body">
//                <h1></h1>
//              </div>
//              <div className="card-footer">
//                <h1>{item.restaurant_name} rs</h1>
//              </div>
//            </div>
//          ))}
//        </div>
//        </>
     
//     );
//   };

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
      };
        // if(filterdata.length===0){
        //     return(
        //         <h1>no resturant found</h1>
        //     )
        // }

const isonline = useOnline();
if(!isonline){
    return <h1>u r offline </h1>
    
}
        if(!resturant){
            return null;
        }// this is alternate way to handle shimmer i mean if length is zero load ntg 
    return (resturant.length===0)?<ShimmerCardList/>:(
        <>
        {/* style={{margin:"20px"}} */}
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
                <div className="card w-72 h-80 p-2   border-solid border-red-300 m-14 shadow-lg bg-red-400" >
                {/* style={{ height: "400px", width: "300px", border: "1px solid black", margin: "20px" }} */}
                    <div className="card-header">
                        <img src={item.restaurant_thumb} alt={item.restaurant_name} style={{ width: "100%", height: "200px" }} className="w-full h-48 object-cove" />
                    </div>
                    <div className="card-body">
                      <h1 className="font-bold"> Resturant Name:{item.restaurant_name} </h1>
                    </div>
                    <div className="card-footer">
                        <h1 className="font-bold"> Rating :{item.average_rating} stars</h1>
                    </div>
                </div>
            </Link>
        ))}
    </div>
)}

      
        
         
      
       </>
     
    );
        
    
}
  