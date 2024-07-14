import React, { useState,useContext } from "react";


// const Section =({title,description})=>{
//     const [Isvisible,setIsvisible]=useState(false)
//     const [Ishide,setIshide]=useState(false)
//     function handleclick(){
//         setIsvisible(true)
        
//     }
//     function handlehideclick(){
//         setIsvisible(false)
//         setIshide(true)
        
//     }
//     return(
//         <>
//          <div className=" border-solid border-4 m-3 border-purple-950">
//            <h1 class="font-bold m-2 p-2">{title}</h1>
 
//            {Isvisible?(<p className="m-2 p-2">{description} </p>) : (null)}
//         {Isvisible?(   <button className="hover:cursor-pointer underline font-medium" onClick={handlehideclick}>hide</button>):(   <button className="hover:cursor-pointer underline font-medium" onClick={handleclick}>show</button>)}
        
//            </div>
//         </>
//     )
// }
// export default function Instamart(){
//     return(
//         <>
//         <h1 className="font-extrabold m-3 text-center"> Welcome to Instamart   </h1>
//         <Section title="this is about us page of insta" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." />

//         <Section title="this is Teams page of insta" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." />

//         <Section title="this is  Carreres page of insta" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." />
//         </>
//     )
// }
// /////////
const Section =({title,description,Isvisible,setIsvisible})=>{
    
    const [Ishide,setIshide]=useState(false)
    function handleclick(){
        setIsvisible(true)
        
    }
    function handlehideclick(){
        setIsvisible(false)
        setIshide(true)
        
    }
    return(
        <>
         <div className=" border-solid border-4 m-3 border-purple-950">
           <h1 class="font-bold m-2 p-2">{title}</h1>
 
           {Isvisible?(<p className="m-2 p-2">{description} </p>) : (null)}
        {Isvisible?(   <button className="hover:cursor-pointer underline font-medium" onClick={handlehideclick}>hide</button>):(   <button className="hover:cursor-pointer underline font-medium" onClick={handleclick}>show</button>)}
        
           </div>
        </>
    )
}
export default function Instamart(){
    const[section,setsection] =useState({
        showabout:false,
        showteam:false,
        showcarrere:false,
    })
    return(
        <>
        <h1 className="font-extrabold m-3 text-center"> Welcome to Instamart   </h1>
        <Section title="this is about us page of insta" description="At verr aut perferen" Isvisible={section.showabout} 
        setIsvisible={(Isvisible)=> setsection({
            showabout:true,
            showteam:false,
            showcarrere:false,
        })} />
        {/* Isvisible={true} */}

        <Section title="this is Teams page of insta" description="At vero eos et " Isvisible={section.showteam} setIsvisible={(Isvisible)=> setsection({
            showabout:false,
            showteam:true,
            showcarrere:false,
        })}/>

        <Section title="this is  Carreres page of insta" description="At vero eos et accusamus et" Isvisible={section.showcarrere} setIsvisible={(Isvisible)=> setsection({
            showabout:false,
            showteam:false,
            showcarrere:true,
        })}/>
        </>
    )
}







