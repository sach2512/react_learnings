
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
const Instamart = lazy(() => import("../Components/Instamart"));
const About =lazy(()=> import("../Components/About"));
import {Provider} from "react-redux";
import Cart from "../Components/Cart";
import store from "../utils/store";
const AppLay = ({user})=>{
    
    return(
        <>
        
          <Provider store={store}>
          <Navbar   user={user} />
          <Outlet />
          </Provider>
          
          
            {/* <HeroSection/> */}
            {/* i want my navbar and footer to be for sure and middle should chnage accourdting to routr so we use somtng called outlet api provied by recatrouter-dom */}
        </>
         
          
            
        
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
            },
            {
                path:"/cart",
                element:<Cart/>,
                errorElement:<Error/>,
                
            },
        ]

        
    },
    
    
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
