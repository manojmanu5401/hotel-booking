import Banner from "../components/Banner";
import Fotter from "../components/Footer";
import NavBar from "../components/NavBar";
import Offers from "../components/Offers";
import {useDispatch}  from "react-redux"
import PopularHotels from "../components/PopularHotels";
import { setSearchItem } from "../state/searchSlice";
import PopularPlaces from "../components/PopularPlaces";
import Subscribtion from "../components/Subscribtion";

const Home = () => {
    const dispatch = useDispatch();
    dispatch(setSearchItem({
        location: null,
        checkIn: null,
        checkOut: null,
        guests: null,
        days: null,
      }))
    return  <>
    <NavBar/>
    <Banner/>
    <PopularHotels/>
    <Offers/>
    <PopularPlaces/>
    <Subscribtion/>
    <Fotter/>    
    </>
};

export default Home;
