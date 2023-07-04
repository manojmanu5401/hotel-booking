import Banner from "../components/Banner";
import Fotter from "../components/Footer";
import NavBar from "../components/NavBar";
import Offers from "../components/Offers";
import {useDispatch}  from "react-redux"
import PopularHotels from "../components/PopularHotels";
import { setSearchItem } from "../state/searchSlice";
import PopularPlaces from "../components/PopularPlaces";
import Subscribtion from "../components/Subscribtion";
import {useEffect}  from "react"

const Home = () => {
  useEffect(() => {
    document.title="TravelNest"
  }, [])
    const title = "Enjoy Your Dream Vacation"
    const desc = "Unlock Extraordinary Experiences: Discover the World's Finest Hotels at Your Fingertips!"
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
    <Banner title={title} desc={desc} banner="banner"/>
    <PopularHotels/>
    <Offers/>
    <PopularPlaces/>
    <Subscribtion/>
    <Fotter/>    
    </>
};

export default Home;
