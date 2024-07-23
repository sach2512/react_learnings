import  {createSlice} from "@reduxjs/toolkit"
 const cartslice = createSlice(
    {
        name:"cart",
        initialState:{
            items:[]
        },
        // these reudcer function takes two things instial state (that is state to know whts is the current state of the comoknent) and payload 
        //An action typically has a type field, which is a string that indicates the type of action being performed,
        // and a payload field, which contains any data needed to perform the action.
        reducers:{
            additem:(state,action)=>{
                    state.items.push(action.payload);//intial state we are pusing the action.payload (the information) we revice to array
            },
            removeitem:(state,action)=>{
              
                let index = state.items.filter((item)=>item.menu_id!=action.payload)
                state.items=[...index]
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