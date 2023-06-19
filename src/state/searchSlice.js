import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null,
  checkIn: null,
  checkOut: null,
  guests: 1,
};

export const searchSlice = createSlice({
  name: "search",
  initialState: { initialState },
  reducers: {
    setSearchItem: (state, action) => {
      state.location = action.payload.location;
      state.checkIn = action.payload.checkIn;
      state.checkOut = action.payload.checkOut;
      state.guests = action.payload.guests;
    },
  },
});

export const { setSearchItem } = searchSlice.actions;
export default searchSlice.reducer;
