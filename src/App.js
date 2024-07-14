
//         </div>
//     )
// }

// const Card = (props)=>{
    
//     return(
//         <div>
//             <div className="card"  style={{height:"400px",width:"300px",border:"1px solid black",margin:"20px"}}>
//     <img src={props.menu.menu_image} alt={name} className="card-img"
//      style={{
//         height:"200px",width:"300px",
//     }} />
//     <div className="card-body ">
//      <h1>{props.menu.menu_name}</h1>
//     </div>
//     <div className="card-footer ">
//      <h1>{props.menu.menu_price}</h1>
//     </div>
//   </div>
//         </div>
//     )
// }







// const appRouter = createBrowserRouter([
//     {
//         path:"/",
//         element:<AppLay/>,
//         errorElement:<Error/>
//     },
//     {
//         path:"/about",
//         element:<About/>,
//         errorElement:<Error/>
//     },
    
// ])
//but now when we go to about pagewe dnt have header and footer so we need to make about children of applay out for that we nned to change config
import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";

import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";

import Error from "../Components/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "../Components/Contact";

import ClassProfile from "../Components/ClassProfile";
import Menu from "../Components/Menu";
import ShimmerCardList from "../Components/Shimmerui";
// import Instamart from "../Components/Instamart";
//import  About from  "../Components/About"


const Instamart = lazy(() => import("../Components/Instamart"));
const About =lazy(()=> import("../Components/About"));
import {Provider} from "react-redux";
import Store from "../utils/store";
//untill thre time react has these component it will take some time for get these componetn untill that react tells error 

const AppLay = ({user})=>{
    
    return(
        <div>
          <Provider store={Store}>
          <Navbar   user={user} />
          <Outlet />
          </Provider>
            {/* <HeroSection/> */}
            {/* i want my navbar and footer to be for sure and middle should chnage accourdting to routr so we use somtng called outlet api provied by recatrouter-dom */}
            
        </div>
    )
}


const appRouter = createBrowserRouter([
    
    {
        path:"/",
        element:<AppLay name="sachin" user={{email:"sachin@gmail.com"}}/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/about",
                element:<Suspense fallback={<h1>loading...</h1>}><About/></Suspense>,
                errorElement:<Error/>,
                children:[
                    {
                        path:"profile",
                        element:<ClassProfile/>,
                        errorElement:<Error/>
                    }
                    // these will not work because every component is rendered in outlet an we need to make outlet in parents component
                  
                ]
            },
            {
                path:"/",
                element:<HeroSection />,
                errorElement:<Error/>,
                
            },
            {
                path:"/contact",
                element:<Contact/>,
                errorElement:<Error/>
            },
            {
                path:"/instamart",
                element:<Suspense fallback={<ShimmerCardList/>}><Instamart/></Suspense>,
                errorElement:<Error/>,
                
            },
            {
                path:"/menu/:id",
                element:<Menu/>,
                errorElement:<Error/>
            }
        ]

        
    },
    
    
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
