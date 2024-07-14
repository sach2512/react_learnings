import React from "react";
import { useRouteError } from "react-router-dom";
export default function Error(){
   let err= useRouteError();
   console.log(err);
    return(
        <>
       
        <h1> this is error page   </h1>
        <h1>{err.status} {err.statusText}</h1>
        
        </>
    )
}