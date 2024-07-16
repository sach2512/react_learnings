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
                state.items.pop(action.payload);
            },
            clearcart:(state)=>{
                   state. items=[];
            }
           
        }
    }
)
// export actions and slices now our store dnt know all these  reducer so we need to put all tehse reducer in store

export const { additem, removeitem, clearcart } = cartslice.actions;
export default cartslice.reducer;