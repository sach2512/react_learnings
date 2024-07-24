import  {createSlice} from "@reduxjs/toolkit"
import { stat } from "fs"

 const cartslice = createSlice(
    {
        name:"cart",
        initialState:{
            items:[]
        },
        // these reudcer function takes two things instial state (that is state to know whts is the current state of the comoknent) and payload 
        //An action typically has a type field, which is a string that indicates the type of action being performed,
        // and a payload field, which contains any data needed to perform the action.
        //intial state we are pusing the action.payload (the information) we revice to array
                    
        reducers:{
            additem:(state,action)=>{
                const newItem = action.payload; // Full item object
                let existingitem = state.items.find((item=>Number(item.menu_id)===Number(newItem.menu_id)));
                console.log(`the existing item is ${existingitem}`);
                console.log('Action Payload:', newItem);
            
                if(existingitem){
                   
                    existingitem.quantity +=1;
                }else{
                    state.items.push(action.payload);
                }
                
                  
            },
            removeitem: (state, action) => {
                const newItemId = action.payload; 
                console.log(`The newItemId is ${newItemId}`);
                
                let item = state.items.find(item => Number(item.menu_id) === Number(newItemId));
                console.log(`The item is ${JSON.stringify(item)}`);
                
                if (item) {
                  if (item.quantity > 1) {
                    item.quantity -= 1;
                  } else if (item.quantity === 1) {
                    
                    let index = state.items.filter((item)=>item.menu_id!=action.payload)
                    state.items=index;
                  }
                } else {
                  alert(`there is no item with that name`);
                }
              },
          
            clearcart:(state)=>{
                   state. items=[];
            }
           
        }
    }
)

// cartslice={
//     actions:{
//         additem:
//         clearcart
//         removeitem
//     },
//     reducer:reducers
// } //behind they might store it like these 
// export actions and slices now our store dnt know all these  reducer so we need to put all tehse reducer in store

export const { additem, removeitem, clearcart } = cartslice.actions; // destrcturing 
export default cartslice.reducer;