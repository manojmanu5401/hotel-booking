import { configureStore } from '@reduxjs/toolkit';
import SearchReducer  from   './searchSlice'

const Store = configureStore({
    reducer:{
        search: SearchReducer
    }
})

export default Store;