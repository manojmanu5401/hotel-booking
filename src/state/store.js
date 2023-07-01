import { configureStore } from '@reduxjs/toolkit';
import SearchReducer  from   './searchSlice'
import HotelSlice from './hotelSlice'

const Store = configureStore({
    reducer:{
        search: SearchReducer,
        hotel: HotelSlice
    }
})

export default Store;