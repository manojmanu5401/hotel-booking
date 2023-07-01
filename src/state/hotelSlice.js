import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null
}

export const  hotelSlice = createSlice({
    name: 'hotel',
    initialState:{initialState},
    reducers:{
        sethotelId:(state,  action)=>{
            state.id = action.payload.id;
        }
    }
})

export const {sethotelId} = hotelSlice.actions;
export default hotelSlice.reducer;